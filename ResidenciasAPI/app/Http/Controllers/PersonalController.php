<?php




namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Personal;
use App\Helpers\JwtAuth;
use Illuminate\Support\Facades\Validator;


class PersonalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personal = Personal::all()->load('academico');
        return response()->json(array(
            'personal'=>$personal,
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
            'puesto'=>'required',            
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
    

        //Guardar el personal
        $personal = new Personal();
        $personal->updated_by = $user->sub;
        $personal->nombre = $request->nombre;
        $personal->puesto = $request->puesto;

        $personal->save();

        $data = array(
            'personal' => $personal,
            'status'=> 'success',
            'code' =>200);

        }else {
        //devolve error
        $data = array('personal' => 'Login incorrecto',
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
        //
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
            'puesto'=>'required']);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
            //Actualizar el personal
            unset($request->id);
            unset($request->created_at);
            
            $personal = Personal::where('id', $id)->update($request->all());
            $data = array(
                'personal' =>$personal,
                'status' => 'success',
                'code'=> 200
            );
        }else {
        //devolve error
        $data = array('personal' => 'Login incorrecto',
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
    public function destroy($id)
    {
        //
    }
}
