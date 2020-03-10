<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Academico;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Helpers\JwtAuth;

class AcademicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $academico = User::where('rol', 'NOT LIKE', 'ALUMNO')->get()->load('academico');
        return response()->json(array(
            'academico'=>$academico,
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
    public function store(Request $request){
        $hash = $request->header('Authorization');
        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){       
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);
            $validator = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'apellido_pat'=>'required',            
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
    

        //Guardar el academico
        $academico = new Academico();
        $academico->user_id = $user->sub;
        $academico->nombre = $request->nombre;
        $academico->apellido_pat = $request->apellido_pat;
        $academico->apellido_mat = $request->apellido_mat;
        $academico->matricula = $request->matricula;
        $academico->puesto = $request->puesto;

        $academico->save();

        $data = array(
            'academico' => $academico,
            'status'=> 'success',
            'code' =>200);

        }else {
        //devolve error
        $data = array('academico' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $academico = Academico::where('user_id', $id)->first();
        if($academico != null){
        
        $academico = Academico::where('user_id', $id)->first();
        return response()->json(array('academico'=>$academico, 'status'=>'success'), 200);
        }else{
        return response()->json(array(
        'academico'=> $academico,
        'status'=>'error'
        ), 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){    
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);

            $validator = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'apellido_pat'=>'required' ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
            //Actualizar el academico
            unset($request->id);
            unset($request->user_id);
            unset($request->created_at);
            
            $academico = Personal::where('id', $id)->update($request->all());
            $data = array(
                'academico' =>$academico,
                'status' => 'success',
                'code'=> 200
            );
        }else {
        //devolve error
        $data = array('academico' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $hash = $request->header('Authorization');

        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
      //Comprobar que existe el registrado
      $academico = User::find($id);

      //Borarlo
      $academico->delete();

      //Devolverlo
      $data = array(
       'academico'=> $academico,
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
