<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Cuprum&display=swap" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=AIzaSyCnMj8Xc5_jA0tqVHCoFHCk-2sHt4imItA" type="text/javascript"></script>
    </script>
    <link rel="stylesheet" href="{{ asset('index.css') }}"></link>
    <link rel="stylesheet" href="{{ asset('pro.css') }}"></link>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >
</head>
<body>
	@extends('lay')
    @extends('layouts.app')
		@section('content')

	<div style="padding-bottom: 100px; margin-top: -80px " class="profile"  >
        	<h1 style="display:flex;justify-content: center;color: lightgreen; margin-top: 80px; margin-bottom: 50px">{{__('lang1.pro')}}</h1>
        	<hr>
        	<h2 style="color: lightgreen; margin-left: 270px; padding-right: 200px; margin-top: 30px">{{__('lang1.details')}}</h2>	
        	<div style="float: left;margin-left: 270px; margin-right: 130px; margin-top: 20px"><h6>{{__('lang1.name')}}</h6>
        	<p>{{__('lang1.herName')}}</p>
        	<h6>{{__('lang1.age')}}</h6>
        	<p>{{__('lang1.herAge')}}</p>
        	<h6>{{__('lang1.local')}}:</h6>
        	<p >{{__('lang1.herLocal')}}</p></div>
        	<img src="/images/pro.jpg" style="height: 200px; float: left; margin-right: 90px; margin-top: -20px" alt="">
        	
        </div>
        @endsection
</body>
</html>