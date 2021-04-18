<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class ProController extends Controller
{
    //
     public function store1(Request $request){
    	Post::create([
    	'name'=>$request->name,
    	'username'=>$request->username,
    	'email'=>$request->email,
    	'password'=>$request->password,
    ]);
    	return back();

    }
    public function index(){
    	$post = Post::all();

    	return view('index')->with(['post'=>$post]);
    }

    function upload(Request $req){
        $file = $req -> file('file')->store('uplooad' );
         return view('Project.project',['path'=>$file]);
         

    } 
}

?>