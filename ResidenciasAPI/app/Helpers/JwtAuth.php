<?php
  namespace App\Helpers;
  use Firebase\JWT\JWT;
  use Illuminate\Support\Facades\DB;
  use App\User;

  class JwtAuth{
    public $key;

    public function __construct(){
      $this->key = 'esta-es-mi-clave-secreta-3141592*';
    }

    public function signup($email, $pass, $getToken = null){
        $user = User::where(
          array(
            'email'=> $email,
            'pass'=> $pass)
          )->first();

          $signup = false;
          if(is_object($user)){
            $signup = true;
          }
          if($signup){
            //generar el token
            $token = array(
              'sub'=> $user->id,
              'email'=> $user->email,
              'rol'=> $user ->rol,
              'iat' => time(),
              'exp' => time()+(7*24*60*60)
            );

            $jwt= JWT::encode($token, $this->key, 'HS256');
            $decoded = JWT::decode($jwt, $this->key, array('HS256'));

            if(is_null($getToken)){
              return $jwt;
            }else{
              return $decoded;
            }
          }else{
            //devolver un date_get_last_errors
            return array('status'=>'error', 'message'=> 'Login ha fallado!!');
          }
      }

      /*public function checkToken($jwt, $getIdentity){
        $auth=false;
        $decoded = JWT::decode($jwt, $this->key, array('HS256'));
        if(empty($decoded)){
          return $auth;
        } else{
          $auth=true;
          if($getIdentity){
            return $decoded;
          }else{
            return $auth;
          }
        }
      }*/
      public function checkToken($jwt, $getIdentity = false){
        $auth = false;

        try{
          $decoded = JWT::decode($jwt, $this->key, array('HS256'));
        }catch(\UnexpectedValueException $e){
          $auth = false;
        }catch(\DomainException $e){
          $auth = false;
        }

        if(isset($decoded) && is_object($decoded) && isset($decoded->sub)){
          $auth = true;
        }else{
          $auth = false;
        }

        if($getIdentity){
          return $decoded;
        }else{
          return $auth;
        }

        return $auth;
      }
    }

?>
