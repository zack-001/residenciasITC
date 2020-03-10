<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    protected $table = 'alumnos';

    //Relation many to one
    public function proyecto(){
        return $this->belongsTo('App\Proyecto', 'proyecto_id');
      }
    public function carrera(){
        return $this->hasOne('App\Carrera','carrera_id');
    }
}
