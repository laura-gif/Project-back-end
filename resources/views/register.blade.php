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
    <link rel="stylesheet" href="{{ asset('pro.css') }}"></link>
    <script src="{{ asset('pro.js') }}"></script>
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >
	

</head>
@extends('layout')
		@section('content')
<body style="background-image: url(http://ramki-vsem.ru/fon/rozovyj-fon31.jpg); background-size: 100%; ">
	<div class="l1" style="margin-top: -40px">
				<div class="l2">
					<a href="/project/{lang}">
					<img src="https://w1.pngwing.com/pngs/180/227/png-transparent-arrow-icon-back-icon-left-icon-square-icon-electric-blue-line-logo-symbol-thumbnail.png" id="icon5" alt="njm" width="6%" style="position: relative; left: -230px; top: -20px"></a>
					<img src="https://pbs.twimg.com/profile_images/578813385174835201/6XM2_B0V.png" class="firstimg" alt="j" width="15%" style="margin-left: -35px" >
					<h5>{{__('lang1.create')}}</h5>
					<form method="POST" action="{{route('add-db')}}">
						@csrf
			<input id="m1" type="text" name="name" placeholder="{{__('lang1.full')}}">	
			<input id="m2" type="text" name="username" placeholder="{{__('lang1.username')}}">	
			<input id="m3" type="email" name="email" placeholder="{{__('lang1.email')}}">
			<input id="m5" class="same" type="password" name="password" placeholder="{{__('lang1.pass')}}" minlength="5" maxlength="10">	
			<input id="m6" class="bt" class="same1" type="password" name="again" placeholder="{{__('lang1.repass')}}" minlength="5" maxlength="10">	
			<input id="myCheckbox" class="check" type="checkbox" style="width: 3%; float: left; margin: 0 -160px 0 190px" autocomplete="">
			 <br>	
			<button  name="submit1" class="btn btn-outline-light" href="/sign"  
			 style=" padding-top: 1px; font-size: 15px; margin-top: 10px; margin-right: 35px;">{{__('lang1.sign')}}</button>
			</form>
			</div> 
	</div>
	
</body>@endsection
</html>