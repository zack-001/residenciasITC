<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seguimiento extends Model
{
    protected $table= 'seguimiento';

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
    public function proyecto(){
        return $this->belongsTo('App\Proyecto', 'proyecto_id');
    }
}
