<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    protected $table= 'personal';

    public function academico(){
        return $this->belongsTo('App\Academico', 'updated_by');
    }
   
}
