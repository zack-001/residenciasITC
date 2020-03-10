<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Illuminate\Support\Facades\DB;
use App\Helpers\JwtAuth;

class UserController extends Controller
{
    public function register(Request $request){
        
        $email= $request->email;
        $pass = $request->password;
        $rol = 'ALUMNO';
  
        if(!is_null($email) && !is_null($pass)){
          //Crear usuario
          $user = new User();
          $user->email = $email;
          $pwd=hash('sha256', $pass);
          $user->pass = $pwd;
          $user->rol = $rol;
          
          //comprobar usuario identicado
          $isset_user= User::where('email','=', $email)->count();
        if ($isset_user==0){
            //Guardar usuario
            $user->save();
            $data = array(
              'status' =>'success',
              'code'=> 200,
              'message' => 'usuario registrado correctamente'
            );
          }else{
            //No guardarlo
            $data = array(
              'status' =>'error',
              'code'=> 400,
              'message' => 'usuario duplicado, no puedo registrarse'
            );
          }
  
        }else{
          $data = array(
            'status' =>'error',
            'code'=> 400,
            'message' => 'No se pudo registrar al usuario'
          );
        }
        return response()->json($data, 200);
      }
  
      public function login(Request $request){
        $jwtAuth= new JwtAuth();
  
        $email = $request->email;
        $pass = $request->password;
        $getToken = (!is_null($request) && isset($request->getToken)) ? $request->getToken : null;
  
        //cifrar la contraseña
        $pwd= hash('sha256', $pass);
        if(!is_null($email)&& !is_null($pass) && ($getToken == null || $getToken == 'false')){
          $signup = $jwtAuth->signup($email, $pwd);
  
        }else if($getToken != null){
          $signup = $jwtAuth->signup($email, $pwd, $getToken);
        }else{
          $signup = array(
            'status' => 'error',
            'message' => 'Envia tus datos por post'
          );
        }
        return response()->json($signup, 200);
      }


      public function registerAdmin(Request $request){
        $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
       
           //Conseguir el usuario authenticado
           $Admin = $jwtAuth->checkToken($hash, true);
           
           if($Admin->rol =='ADMIN'){
        $email= $request->email;
        $pass = $request->password;
        $rol = $request->rol;
  
        if(!is_null($email) && !is_null($pass)){
          //Crear usuario
          $user = new User();
          $user->email = $email;
          $pwd=hash('sha256', $pass);
          $user->pass = $pwd;
          $user->rol = $rol;
          
          //comprobar usuario identicado
          $isset_user= User::where('email','=', $email)->count();
        if ($isset_user==0){
            //Guardar usuario
            $user->save();
            $data = array(
              'status' =>'success',
              'code'=> 200,
              'message' => 'Usuario registrado correctamente'
            );
          }else{
            //No guardarlo
            $data = array(
              'status' =>'error',
              'code'=> 400,
              'message' => 'Usuario duplicado, no puedo registrarse'
            );
          }
  
        }else{
          $data = array(
            'status' =>'error',
            'code'=> 400,
            'message' => 'No se pudo registrar al usuario'
          );
        }
      }}else{
          //devolve error
          $data = array('message' => 'Login incorrecto',
          'status'=> 'error',
          'code' =>400);
      
      }
        return response()->json($data, 200);
      }
}
