<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE, PATCH');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization');
/*Route::middleware('api-header')->group(function(){
    
 });*/

Route::post('/api/register', 'UserController@register');
Route::post('/api/register/admin', 'UserController@registerAdmin');
Route::post('/api/login', 'UserController@login');
Route::resource('/api/proyectos','ProyectoController');
Route::resource('/api/alumnos','AlumnoController');
Route::resource('/api/expedientes','ExpedienteController');
Route::resource('/api/seguimiento','SeguimientoController');
Route::resource('/api/personal','PersonalController');
Route::resource('/api/academicos','AcademicoController');

Route::post('/api/busqueda','ProyectoReporteController@busqueda');
Route::post('/api/expediente/busqueda','ExpedienteController@busqueda');
Route::post('/api/expediente/updateFile/{id}','ExpedienteController@updateFile');
Route::post('/api/expediente/movil','ExpedienteController@movilImage');

Route::post('/api/actualizarFondo','ProyectoReporteController@updateFile');
Route::get('/api/getImage','ProyectoReporteController@getImage');


