<?php

namespace App\Http\Controllers;

use App\Expediente;
use App\Alumno;
use App\User;
use Illuminate\Http\Request;
use App\Helpers\JwtAuth;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ExpedienteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $hash = $request->header('Authorization');
      $jwtAuth = new JwtAuth();
      $checkToken = $jwtAuth->checkToken($hash);
      if($checkToken){
          $user = $jwtAuth->checkToken($hash, true);
          if($user->rol=='ALUMNO'){
              $expediente = Expediente::where('user_id', $user->sub)->get()->load('user');
          }else{
              $expediente = Expediente::all()->load('user');
            }
          } else {
        return response()->json(array(
          'expediente'=>'usuario no autenticado',
          'status'=>'error'
        ), 200);
      }  
      
      return response()->json(array(
          'expediente'=>$expediente,
          'status'=>'success'
      ), 200);
    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $hash = $request->header('Authorization');
        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
        //Recoger datos por post
        
        //Conseguir el usuario authenticado
        $user = $jwtAuth->checkToken($hash, true);

        //Validacion
/*
        $validate = Validator::make($request->all(), [ 
            'nombre'=>'required',
            //'doc_dir'=>'required',
        ]);

        if($validate->fails()){
            return response()->json($validate->errors(), 400);
        }

*/
        
        if( $request->hasFile('file')){
            //Subida de la Miniatura
       
        $expediente = new Expediente();
        $expediente->user_id = $user->sub;
        $expediente->nombre = $request->nombre;
        $expediente->descripcion = $request->descripcion;
        $image = $request->file('file');
        $image_path= time().'_'.$image->getClientOriginalName();
         Storage::disk('files')->put($image_path, \File::get($image));
          //$path = $request->file('file')->storeAs('public/','files');
          //$path = $request->file('file')->store('avatars');
          $expediente ->doc_dir = $image_path;
          $expediente->save();
          $data = array(
            'expediente' => $expediente,
            'status'=> 'success',
            'code' =>200);

        }else{
        $data = array(
            'expediente' => $request->hasFile('file'),
            'status'=> 'almost',
            'code' =>200);
        }
        }else {
        //devolve error
        $data = array('expediente' =>$checkToken,
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Expediente  $expediente
     * @return \Illuminate\Http\Response
     */
    public function show(Expediente $expediente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Expediente  $expediente
     * @return \Illuminate\Http\Response
     */
    public function edit(Expediente $expediente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Expediente  $expediente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
       
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);
           $json = $request->input('json', null);
           $params = json_decode($json);
           $params_array = json_decode($json, true);
     
           /* $validator = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'doc_dir'=> 'mimes:doc,pdf,docx,zip'
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }*/
            if($user->sub == $request->user_id){
              $documento = Expediente::find($id);
              
              /*if($documento->doc_dir == $request->doc_dir){
                unset($request->id);
                unset($request->created_at);
                unset($request->user_id);
                unset($request->doc_dir);
                $documento = Expediente::where('id', $id)->update($request->all());
              }else{
                //Actualizar el documento
              unset($request->id);
              unset($request->created_at);
              unset($request->user_id);
              $image = $request->file('file');
              $image_path= time().'_'.$image->getClientOriginalName();
              Storage::disk('files')->put($image_path, \File::get($image));
              Storage::disk('files')->delete($request->doc_dir);
              $request ->doc_dir = $image_path;
        
              $documento = Expediente::where('id', $id)->update($request->all());
              }*/

             
              $data = array(
              'documento' =>$request->formData,
              'status' => 'success',
              'code'=> 200
            );}else{
              $data = array(
                'documento' =>$request->hasFile('file'),
                'status' => 'error',
                'code'=> 200
              );
            }

        }else {
        //devolve error
        $data = array('documento' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);



      
    }

    public function movilImage(Request $request)
    {
      $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
          $validate = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'file'=>'required',
        ]);

        if($validate->fails()){
            return response()->json($validate->errors(), 400);
        }
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);

           if($request->file){
            //generating unique file name;
            $image_path= time().'_'.$request->nombre.'.jpg';            //@list($type, $file_data) = explode(';', $file_data);
            //@list(, $file_data)      = explode(',', $file_data);
          
              \Storage::disk('files')->put($image_path,base64_decode($request->file));   
              $expediente = new Expediente();
              $expediente->user_id = $user->sub;
              $expediente->nombre = $request->nombre;
              $expediente->descripcion = $request->descripcion;
              $expediente->doc_dir = $image_path;  
              $expediente->save();
          }
           $data = array('expediente' =>$expediente,
            'status'=> 'success',
            'code' =>200);
        
        }else{
          $data = array('expediente' =>'no token',
            'status'=> 'error',
            'code' =>200);
        }
        
        return response()->json($data, 200);
        
    }



    public function updateFile(Request $request, $id)
    {
      $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
          
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);
     
            $validator = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'doc_dir'=> 'required'
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }

            if($user->sub == $request->user_id){
              $documento = Expediente::find($id);
              
              if($documento->doc_dir == $request->doc_dir){
                unset($request->id);
                unset($request->created_at);
                unset($request->user_id);
                unset($request->doc_dir);
                $documento = Expediente::where('id', $id)->update($request->all());
              }else{
                //Actualizar el documento
              unset($request->id);
              unset($request->created_at);
              unset($request->user_id);
              $image = $request->file('doc_dir');
              $image_path= time().'_'.$image->getClientOriginalName();
              Storage::disk('files')->put($image_path, \File::get($image));
              Storage::disk('files')->delete($documento->doc_dir);
             
              $documento = Expediente::where('id', $id)->update(['nombre'=>$request->nombre, 'descripcion'=>$request->descripcion, 'doc_dir'=>$image_path]);
              }
            
             
              $data = array(
              'documento' =>$documento,
              'status' => 'success',
              'code'=> 200
            );}else{
              $data = array(
                'documento' =>$request->doc_dir,
                'status' => 'error',
                'code'=> 200
              );
            }
            
        }else {
        //devolve error
        $data = array('documento' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Expediente  $expediente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
      $hash = $request->header('Authorization');

        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){          
          
          $user = $jwtAuth->checkToken($hash, true);

          //Comprobar que existe el registrado
          $documento = Expediente::find($id);
          
          if($documento && $documento->user_id == $user->sub){
            //Borarlo
            $documento->delete();
            Storage::disk('files')->delete($documento->doc_dir);
            $documento-> delete();
            $message= array('message'=>'Video eliminado correctamente!!', 'status'=>'success');
          }else $message= array('message'=>$documento, 'status'=>'error');
      }else{
        $message= array('message'=>'Video no ha podido eliminarse !!', 'status'=>'error');     
      }
      return $message;
    }

    public function busqueda(Request $request)
    {
      $hash = $request->header('Authorization');
      $buscar= $request->busqueda;
      $jwtAuth = new JwtAuth();
      $checkToken = $jwtAuth->checkToken($hash);
      if($checkToken){
          $user = $jwtAuth->checkToken($hash, true);
          if($user->rol=='ALUMNO'){
            if($buscar){
              $expediente = DB::select("select documentos.id, documentos.nombre, documentos.descripcion, documentos.doc_dir,
              documentos.created_at, documentos.updated_at, documentos.user_id, users.email
              from documentos
                join users on documentos.user_id = users.id 
                join proyectos on users.id = proyectos.user_id 
                join alumnos on proyectos.id = alumnos.proyecto_id
                where  
                ((documentos.nombre like  '%$buscar%' 
                OR alumnos.nc = '$buscar') OR (
                alumnos.nombre like '%$buscar%'
                or  documentos.updated_at LIKE '$buscar%')) and users.id = $user->sub");
            }else{
              $expediente = Expediente::where('user_id', '=', $user->sub)->get();
            }
          }else{
            if($buscar){
              $expediente = DB::select("select documentos.id, documentos.nombre AS nombre, documentos.descripcion, documentos.doc_dir,
                documentos.created_at, documentos.updated_at, documentos.user_id, users.email
                from documentos
                join users on documentos.user_id = users.id 
                join proyectos on users.id = proyectos.user_id 
                join alumnos on proyectos.id = alumnos.proyecto_id
                where 
                ((documentos.nombre like  '%$buscar%' 
                OR alumnos.nc = '$buscar') OR (
                alumnos.nombre like '%$buscar%'
                or  documentos.updated_at LIKE '$buscar%'))");
            }else{
              $expediente = Expediente::all()->load('user');
            }
          }
      } else{
        return response()->json(array(
          'expediente'=>'usuario no autenticado',
          'status'=>'error'
        ), 200);
      }
      if($expediente){
        return response()->json(array(
          'expediente'=>$expediente,
          'status'=>'success'
      ), 200);  
      }else{  
      return response()->json(array(
          'expediente'=>"No se encontraron coincidencias con: $buscar",
          'status'=>'error'
      ), 200);
    }
    }
}
