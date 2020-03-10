<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expediente extends Model
{
    protected $table= 'documentos';

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
