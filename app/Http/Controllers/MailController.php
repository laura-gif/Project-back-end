<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\DemoEnail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;


class MailController extends Controller
{
   public function send()
    {
    	$details = [
    	'title'=> 'Laura Tileubek',
    	'body'=> 'You have registered on the site "Sweetest"'
    ];
    
        Mail::to("190103375@stu.sdu.edu.kz")->send(new DemoEnail($details));
        return view('auth.register');
 }

}
