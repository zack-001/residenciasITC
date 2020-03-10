<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'email', 'pass',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $table= 'users';

    public function proyecto(){
        return $this->hasOne('App\Proyecto', 'user_id');
    }

    public function expediente(){
        return $this->hasMany('App\Expediente')->orderBy('id', 'desc');
    }
    public function academico(){
        return $this->hasOne('App\Academico', 'user_id');
    }

}
