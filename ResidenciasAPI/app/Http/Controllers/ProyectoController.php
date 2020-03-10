<?php

namespace App\Http\Controllers;

use App\Proyecto;
use App\Alumno;
use Illuminate\Http\Request;
use App\Helpers\JwtAuth;
use Illuminate\Support\Facades\Validator;


class ProyectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $proyecto = Proyecto::all()->load('alumno','seguimiento');
        return response()->json(array(
            'proyecto'=>$proyecto,
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
            'empresa'=>'required',
            'ciclo'=>'required',
    //        'proyecto_dir'=> 'mimes:doc,pdf,docx,zip'
            
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
    

        //Guardar el proyecto
        $proyecto = new Proyecto();
        $proyecto->user_id = $user->sub;
        $proyecto->nombre = $request->nombre;
        $proyecto->empresa = $request->empresa;
        $proyecto->ciclo = $request->ciclo;
        $proyecto->asesor_ext = $request->asesor_ext;
        $proyecto->proyecto_dir = $request->proyecto_dir;
        $proyecto->num_residentes = $request->num_residentes;
        

/*
        //Saving file
        $file = $request->file('proyecto_dir');
        if($file){
          $file_path= time().$file->getClientOriginalName()."*$proyecto->user_id";
          \Storage::disk('expedientes')->put($file_path, \File::get($file));
          $proyecto->proyecto_dir = $file_path;
        }*/
        $proyecto->save();

        $data = array(
            'proyecto' => $proyecto,
            'status'=> 'success',
            'code' =>200);

        }else {
        //devolve error
        $data = array('proyecto' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Proyecto  $proyecto
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    { 
        
        $proyecto = Proyecto::where('user_id', $id)->first();
        if($proyecto != null){
        
        $proyecto = Proyecto::where('user_id', $id)->first()->load('alumno', 'seguimiento');
        return response()->json(array('proyecto'=>$proyecto, 'status'=>'success'), 200);
        
    }else{
        return response()->json(array(
        'proyecto'=> $proyecto,
        'status'=>'error'
        ), 200);
        }
    }


    public function busqueda($buscar, $tipo)
    {

        if($tipo ==1){
            $proyecto = Proyecto::where('nombre', 'LIKE', '%'.$buscar.'%')->get()->load('alumno', 'seguimiento');
            $data = array(
                'proyecto' => $proyecto,
                'status'=> 'success',
                'code' =>200);
        }else{
                $filter= collect(DB::table('proyectos')
                ->join('alumnos', 'proyectos.id', '=', 'alumnos.proyecto_id')
                ->where('alumnos.nombre', 'LIKE', '%'.$buscar.'%')
                ->OrWhere('alumnos.nc', 'LIKE', $buscar)
                ->select('proyectos.id')->groupBy('proyectos.id')
                ->get());
                $keyed = $filter->keyBy('id')->keys()->all();
           
                $proyecto = collect(Proyecto::all()->load('alumno','seguimiento'))->whereIn('id', $keyed);
                
            $data = array(
            'proyecto' => $proyecto,
            'status'=> 'success',
            'code' =>200);
        }
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Proyecto  $proyecto
     * @return \Illuminate\Http\Response
     */
    public function edit(Proyecto $proyecto)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
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

            $validator = Validator::make($request->all(), [ 
            'nombre'=>'required',
            'empresa'=>'required',
            'ciclo'=>'required',
    //        'proyecto_dir'=> 'mimes:doc,pdf,docx,zip'
            
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
    

        //Actualizar el proyecto
        unset($request->id);
        unset($request->user_id);
        unset($request->created_at);

        
        $proyecto = Proyecto::where('id', $id)->update($request->all());
        $data = array(
            'proyecto' =>$request,
            'status' => 'success',
            'code'=> 200
        );

        }else {
        //devolve error
        $data = array('proyecto' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Proyecto  $proyecto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id )
    {
        $hash = $request->header('Authorization');

        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
      //Comprobar que existe el registrado
      $proyecto = Proyecto::find($id);

      //Borarlo
      $proyecto->delete();

      //Devolverlo
      $data = array(
       'proyecto'=> $proyecto,
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
