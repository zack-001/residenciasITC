<?php

namespace App\Http\Controllers;
use App\Proyecto;
use App\Alumno;
use App\Seguimiento;
use App\Helpers\JwtAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class SeguimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        
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

        //Guardar
        $seguimiento = new Seguimiento();
        //$seguimiento->user_id = $user->sub;
        $seguimiento->asesor_int = $request->asesor_int;
        $seguimiento->status = $request->status;
        $seguimiento->proyecto_id = $request->proyecto_id;
        $seguimiento->save();

        $data = array(
            'seguimiento' => $seguimiento,
            'status'=> 'success',
            'code' =>200);

        }else {
        //devolve error
        $data = array('seguimiento' => 'Login incorrecto',
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
    public function update(Request $request, $id)
    {
        $hash = $request->header('Authorization');


        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);
        if($checkToken){
       
           //Conseguir el usuario authenticado
           $user = $jwtAuth->checkToken($hash, true);

            $validator = Validator::make($request->all(), [ 
            'asesor_int'=>'required',
            'status'=>'required'
            ]);
    
            if ($validator->fails()) {
                return response()->json($validator->errors(), 400);
            }
    

        //Actualizar
        unset($request->id);
        unset($request->proyecto_id);
        unset($request->created_at);

        
        $seguimiento = Seguimiento::where('id', $id)->update($request->all());
        $data = array(
            'seguimiento' =>$seguimiento,
            'status' => 'success',
            'code'=> 200
        );
        //Mail::to($user->email)->send(new ActualizacionStatus());        
        }else {
        //devolve error
        $data = array('seguimiento' => 'Login incorrecto',
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


    public function sendEmail($mail){
        $to_name = 'Residente';
        $to_email = $email;
        //$data = array(‘name’=>”Ogbonna Vitalis(sender_name)”, “body” => “A test mail”);
        Mail::send('ActualizacionStatus', function($message) use ($to_name, $to_email) {
        $message->to($to_email, $to_name)
        ->subject('Laravel Test Mail');
        $message->from('SENDER_EMAIL_ADDRESS','Test Mail');
    });
    }
    /*public function sendEmailReminder(Request $request, $id)
    {
        $user = User::findOrFail($id);

        Mail::send('emails.reminder', ['user' => $user], function ($m) use ($user) {
            $m->from('hello@app.com', 'Your Application');

            $m->to($user->email, $user->name)->subject('Your Reminder!');
        });
    }*/


}
