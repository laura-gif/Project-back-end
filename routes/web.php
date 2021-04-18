<?php

use Illuminate\Support\Facades\Route;

use App\Models\Post;

use App\Http\Controllers\ProController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\HomeController;
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
    return view('Project.project');
});


   Route::get('project/{lang}',function($lang){
	App::setlocale($lang);
	return view('Project.project');
});
//Route::get('/project',function(){
//	return view('Project.project');
//});

Route::get('/index',[ProController::class,'index']);

Route::get('/create',function(){
	return view('index');
});
//Route::post('/project/ru',[ProController::class,'store'])->name('add-db');
//Route::get('/register/{lang}',function($lang){
//	App::setlocale($lang);
//	return view('register');
//});

//Route::post('/register/ru',[MailController::class,'send',ProController::class,'store1'])->name('add-db');
Route::get('profile/{lang}',function($lang){
	App::setlocale($lang);
	return view('profile');
});

//Route::view('project/{lang}','Project.project');
Route::post('project/ru',[ProController::class,'upload']);

Route::get('register/{lang}',function($lang){
	App::setlocale($lang);
	return view('auth.register');
});
Route::post('/register/{lang}',[MailController::class,'send']);



Route::get('login/{lang}',function($lang){
	App::setlocale($lang);
	return view('auth.login');
});

Route::get('/logout',function(){
	return view('Project.project');
});

Auth::routes();

Route::get('/home', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');


