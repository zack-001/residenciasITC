<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Academico extends Model
{
    protected $table= 'academico';

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }

}
