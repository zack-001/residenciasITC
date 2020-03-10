<?php

namespace App\Http\Controllers;
use Illuminate\Support\Collection;
use App\Proyecto;
use App\Alumno;
use Illuminate\Http\Request;
use App\Helpers\JwtAuth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ProyectoReporteController extends Controller
{
    public function busqueda(Request $request)
    {
        
        $hash = $request->header('Authorization');
        $buscar= $request->busqueda;

        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($request->busqueda){
        if($checkToken){
            
        if($request->tipoBusqueda ==1){
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
           
                //$proyecto = collect(Proyecto::all()->load('alumno','seguimiento'))->whereIn('id', $keyed);
                $proyecto = Proyecto::whereIn('id', $keyed)->get()->load('alumno','seguimiento');
                
            $data = array(
            'proyecto' => $proyecto,
            'status'=> 'success',
            'code' =>200);
            }
        }else {
        //devolve error
        $data = array('proyecto' => $request,
        'status'=> 'error',
        'code' =>400);

        }
    }else{
            $proyecto = Proyecto::all()->load('alumno','seguimiento');
        return response()->json(array(
            'proyecto'=>$proyecto,
            'status'=>'success'
        ), 200);
        }


        return $data;
    }

    public function updateFile(Request $request)
    {
      $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
          
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);
            if($user->rol=='ADMIN' && $request->hasFile('doc_dir')){
             
              Storage::disk('public')->put('background.png', \File::get($request->file('doc_dir')));
              $data = array(
                'documento' =>'La imagen a sido actualizada exitosamente!',
                'status' => 'success',
                'code'=> 200);
            }else{
                $data = array(
                    'documento' =>$request->hasFile('doc_dir'),
                    'status' => 'error',
                    'code'=> 200
                  );
            }     
        }  else{ 
        //devolve error
        $data = array('documento' => 'Login incorrecto',
        'status'=> 'error',
        'code' =>400);
        }
        return response()->json($data, 200);
    }

    public function getImage(){
        $file =  Storage::disk('public')->get('background.png');
        $image = base64_encode($file);
        return response()->json("data:image/png;base64,
        $image", 200);
    }
    
}
