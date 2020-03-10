<?php
namespace App\Http\Middleware;
use Closure;
class API
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin: *');
        $response->header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        $response->header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $response->header("Allow: GET, POST, OPTIONS, PUT, DELETE");
        //add more headers here
        return $response;
    }
}