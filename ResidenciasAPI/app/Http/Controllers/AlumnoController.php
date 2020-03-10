<?php

namespace App\Http\Controllers;

use App\Alumno;
use App\Proyecto;
use Illuminate\Http\Request;
use App\Helpers\JwtAuth;
use Illuminate\Support\Facades\Validator;

class AlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $alumno = Alumno::all()->load('proyecto');
        return response()->json(array(
            'alumno'=>$alumno,
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
       
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);

           $validator = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'nc'=>'required',
            'sexo'=>'required',
            'carrera_id'=>'required',
            'apellido_pat'=>'required'
            ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        //Guardar el Alumno
        $alumno = new Alumno();
        $proyecto = Proyecto::where('user_id', $user->sub)->first();

        $alumno->proyecto_id = $proyecto->id;
        $alumno->nombre = $request->nombre;
        $alumno->apellido_pat = $request->apellido_pat;
        $alumno->apellido_mat = $request->apellido_mat;
        $alumno->nc = $request->nc;
        $alumno->telefono = $request->telefono;
        $alumno->sexo = $request->sexo;
        $alumno->carrera_id = $request->carrera_id;

        $alumno->save();

        $data = array(
            'alumno' => $alumno,
            'status'=> 'success',
            'code' =>200);

        }else {
        //devolve error
        $data = array('alumno' => 'Registre un proyecto primero',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $alumno = Alumno::find($id);
        if(is_object($alumno)){
        
        $alumno = Alumno::find($id);
        return response()->json(array(
        'alumno'=>$alumno,
        'status'=>'success'
        ), 200);
        }else{
        return response()->json(array(
        'message'=> 'el alumno no exite',
        'status'=>'error'
        ), 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function edit(Alumno $alumno)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Alumno  $alumno
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

        //Validar datos
        $validate = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'nc'=>'required',
            'sexo'=>'required',
            'carrera_id'=>'required',
            'apellido_pat'=>'required'
            ]);

        if($validate->fails()){
        return response()->json($validate->errors(), 400);
        }

        //Actualizar el alumno
        unset($request->id);
        unset($request->proyecto_id);
        unset($request->created_at);

        
        $alumno = Alumno::where('id', $id)->update($request->all());
        $data = array(
            'alumno' =>$request,
            'status' => 'success',
            'code'=> 200
        );

        }else {
        //devolve error
        $data = array('alumno' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Alumno  $alumno
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $hash = $request->header('Authorization');

        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
      //Comprobar que existe el registrado
      $alumno = Alumno::find($id);

      //Borarlo
      $alumno->delete();

      //Devolverlo
      $data = array(
       'alumno'=> $alumno,
       'status' => 'success',
       'code' => 200
       );

    }else{
      $data = array(
       'status'=> 'error',
       'code' =>400,
       'message' => 'Login incorrecto'
       );
    }
    return response()->json($data, 200);
    }
}
