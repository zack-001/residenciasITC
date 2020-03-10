<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/*
Route::post('/api/register', 'UserController@register');
Route::post('/api/login', 'UserController@login');
Route::resource('/api/proyectos','ProyectoController');
Route::resource('/api/alumnos','AlumnoController');
*/
