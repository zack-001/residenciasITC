<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    protected $table= 'proyectos';

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }

    public function alumno(){
        return $this->hasMany('App\Alumno')->orderBy('id', 'desc');
    }

    public function seguimiento(){
        return $this->hasOne('App\Seguimiento', 'proyecto_id');
    }
}
