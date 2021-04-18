
<!DOCTYPE html>
<html lang="en">
<head>
	<title>sweet.kz</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Cuprum&display=swap" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=AIzaSyCnMj8Xc5_jA0tqVHCoFHCk-2sHt4imItA" type="text/javascript"></script>
    </script>
    <link rel="stylesheet" href="{{ asset('pro.css') }}"></link>
    <script src="{{ asset('pro.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('index.css') }}"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" >
	
  
</head>

<body>
	
		@extends('lay')
		@extends('layouts.lay')
		@section('content')
		

		
		<div style="padding-bottom: 100px; margin-top: -60px; display: none " class="profile" >
        	<h1 style="display:flex;justify-content: center;color: lightgreen; margin-top: 80px; margin-bottom: 50px">{{__('lang1.pro')}}</h1>
        	<hr>
        	<h2 style="color: lightgreen; margin-left: 270px; padding-right: 200px; margin-top: 30px">{{__('lang1.details')}}</h2>	
        	<div style="float: left;margin-left: 270px; margin-right: 130px; margin-top: 20px"><h6>{{__('lang1.name')}}</h6>
        	<p>{{__('lang1.herName')}}</p>
        	<h6>{{__('lang1.age')}}</h6>
        	<p>{{__('lang1.herAge')}}</p>
        	<h6>{{__('lang1.local')}}:</h6>
        	<p >{{__('lang1.herLocal')}}</p></div>
        	
        	@isset($file)
        	<img src="{{ asset('/uplooad/' .$file) }}" style="height: 200px; float: left; margin-right: 90px; margin-top: -20px" alt="">
        	@endisset

        	 <form method="POST" enctype="multipart/form-data" action="/project/ru">
        	 	@csrf
        	 	<input type="file" name="file"> <br> <br>
        	 	<button type="submit">Change Image</button>
        	 </form>
        	
        </div>

        <div style="display: flex; padding-bottom: 20px; margin-top: -24px; padding-top: 25px;margin-bottom: -15px;" class="basc">
				
			    <img src="/images/project/96.jpg" class="first" alt="" style="height: 400px; margin-right:0px;margin-left: 110px; width: 260px" >
            <h1 style="position: absolute; margin-left: 160px;  margin-top:98px;color: darkred; transition: 1s; font-size: 26px; z-index: 1;font-family: cursive;" id="welc"> {{__('lang1.welc')}}<br>{{__('lang1.welc1')}}<br> {{__('lang1.sweet')}} </h1>
            
            <img class="fourth" src="/images/project/sdsf.jpg" alt="j" style="width: 630px; height: 400px; margin-left: 0px; margin-right:0px; display: flex; float: left" id="mainImg1">
            <img class="second" src="/images/project/33.jpg" alt="" style="width: 240px;height: 170px">
            <img class="third" src="/images/project/12.jpg" alt="" style="height: 230px; width: 240px; margin-top: 170px;margin-left: -240px">			
		

			<h1 style="display: none; margin-right: 220px; font-family: sans-serif; letter-spacing:5px; margin-left: 80px;z-index: 1; margin-top:28px;color: black; transition: 1s; cursor: pointer; font-size: 30px" id="welc1"><a href="#" style="color: purple">{{__('lang1.cake')}}</a></h1>


			<p class="texxt" style="font-size: 19px;margin-left: 520px;display: none; margin-right: 120px">{{__('lang1.main')}}<br> {{__('lang1.here')}}<br>{{__('lang1.was')}}<br>{{__('lang1.built')}}  <br> {{__('lang1.why')}}<br>
			{{__('lang1.safe')}} <br>{{__('lang1.when')}}</p>



	     </div>



		 <a href="tel:87051812701">
	    <div class="dws">
	    	<div class="pulse">
	    		<div class="bloc"></div>
	    		<div class="phone"><i class="fa fa-phone" aria-hidden="true"></i></div>
	    		<div class="text">link button</div>
	    	</div>
	    </div></a>

		<div class="tat">
			<div class="tat1">
				<img src="https://dastarkhan24.kz/upload/iblock/31f/31fc44035da02e7ac2421bc8af35bed5.jpg" width="350" height="510px" alt="m" style="float: left;margin-right: 8px" id="bts2"><br>
				<h1 class="bts">"Milky" Cake</h1>	
				<p class="bts1" style="font-size:18px; color:green">123$</p>
				<p style="text-align: left" id="para">{{__('lang1.MILKY')}}</p>
				<div class="number" style="margin-bottom: 70px">
    				
				</div>
				<div style="font-size: 18px;">
				<button class="btn-success plus2" id="myButton" data-id="sisls23" style="border-radius: 20px; width: 100px">Exit </button>
				</div>

				
</div></div>

  <div style="display:none;justify-content: center;padding-top: 50px; margin-bottom: -49.8px " id="cakke">
			
			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/31f/31fc44035da02e7ac2421bc8af35bed5.jpg);background-size: 100%;" id="aya" class="shop-item-image">
			    <div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a" >
			    	<img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>	

				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id ="b"> 
		            <h5 class="shop-item-title" id="dan">'Milky' Cake</h5>
		       	    <p class="shop-item-price" id="lan">123$</p>

		       	   
		        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/6fa/6faf913ab348d0a18c88c291bac2d5a8.jpg);background-size: 100%" id="aya1" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a1">
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>

				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b1"> 
		         	<h5 class="shop-item-title" id="dan1">'Red Velvet'</h5>
		        	<p class="shop-item-price" id="lan1">93$</p>
		        	     </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/983/983107cbb6fee8782df025a7cbadebf2.jpg);background-size: 100%" id="aya2" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a2">
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>

				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b2" > 
		         	<h5 class="shop-item-title" id="dan2">'Customized' cake</h5>
		        	<p class="shop-item-price" id="lan2">110$</p>
		        	   </div>
		    </div>

		    <div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://natashabakes.com/wp-content/uploads/2018/12/moms-chocolate-cake-XL-RECIPE0918.jpg);background-size: 100%" id="aya3" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a3">
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>

				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b3"> 
				    <h5 id="dan3" class="shop-item-title">'Kiev' cake</h5>
		       	    <p id="lan3" class="shop-item-price">80$</p>
		       	      </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/c0f/c0f0e8cd9011be7445d92e36ba3ce0e1.jpg);background-size: 100%" id="aya4" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a4">
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>

				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b4"> 
		         	<h5 id="dan4" class="shop-item-title">'Prague' Cake</h5>
		        	<p id="lan4" class="shop-item-price">120$</p>
		        	 </div>
		    </div>
		</div>	

		<div style="display:none;justify-content: center;padding-top: 50px;" id="cakke1">
			
			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/6d6/6d627d43626688eaa5a345f27a1485ed.jpg);background-size: 100%;" id="aya5" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a5" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>

		        <div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b5"> 
		       	    <h5 id="dan5" class="shop-item-title">'Anniversary' Cake</h5>
		       	    <p id="lan5" class="shop-item-price">100$</p>
		         </div>
		    </div>
		   
		    <div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/2f8/2f89093fb486d306ef1a7e572d4e95c2.jpg);background-size: 100%" id="aya6" class="shop-item-image">
		    	<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a6" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
		   	    <div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b6"> 
		   	        <h5 id="dan6" class="shop-item-title">'Milky Girl' Cake</h5>
		         	<p id="lan6" class="shop-item-price">93$</p>
		       	      </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/2f8/2f89093fb486d306ef1a7e572d4e95c2.jpg);background-size: 100%" id="aya7" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a7" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b7"> 
		       	    <h5 id="dan7" class="shop-item-title">'Carrot' cake</h5>
		       	    <p id="lan7" class="shop-item-price">102$</p>
		          			        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/121/1211cc8630feb33cc71b20cd120ccf7e.jpg);background-size: 100%" id="aya8" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a8" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b8">
			        <h5 id="dan8" class="shop-item-title">'Eden' cake</h5>
		         	<p id="lan8" class="shop-item-price">91$</p>
		      		        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/3c5/3c5291e507b7651db45dba748f6548d6.jpg);background-size: 100%" id="aya9" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a9" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b9"> 
		         	<h5 id="dan9" class="shop-item-title">'Yoghurt' Cake</h5>
		        	<p id="lan9" class="shop-item-price">120$</p>
		        			        </div>
		    </div>
		</div>

		<div style="display:none;justify-content: center;padding-top: 50px;margin-top:-49.8px;" id="cakke2">			
			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://data.whicdn.com/images/320019145/original.jpg);background-size: 140%;" id="aya10" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a10" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
		        <div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b10"> 
		        	<h5 class="shop-item-title">'Napoleon' Cake</h5>
		        	<p class="shop-item-price">99$</p>
		        			        </div>
		    </div>
		   
		    <div style="width:250px; height: 250px; border:1px solid grey;background-image: url(/images/project/black.jpg);background-size: 100%" id="aya11" class="shop-item-image">
		    	<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a11" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
		    	<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b11"> 
		   	        <h5 class="shop-item-title">'Eva' Cake</h5>
		         	<p class="shop-item-price">98$</p>
		        			        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://img.buzzfeed.com/buzzfeed-static/static/2019-11/25/20/asset/a94c546cdc9c/sub-buzz-1105-1574713306-1.jpg);background-size: 130%" id="aya12" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a12" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b12"> 
				    <h5 class="shop-item-title">'Berry' cake</h5>
		        	<p class="shop-item-price">123$</p>
		        		        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/01d/01d16ba95321f727ea204f73cdc30c06.jpg);background-size: 100%" id="aya13" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a13" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b13"> 
					<h5 class="shop-item-title">'Curd' cake</h5>
		       	    <p class="shop-item-price">98$</p>
		       	   		       	     </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(/images/project/2c.jpg);background-size: 100%" id="aya14" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a14" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b14">
				    <h5 class="shop-item-title">'Alen' Cake</h5>
		       	    <p class="shop-item-price">126$</p>
		         			        </div>
		    </div>
		</div>	
<div style="display:none;justify-content: center;padding-top: 50px;margin-top:-49.8px; margin-bottom: 50px" id="cakke3" >
			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(/images/project/a2.jpg);background-size: 100%;" id="aya15" class="shop-item-image">		       
		        <div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a15" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
			    <div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b15"> 
		          	<h5 class="shop-item-title">'Torte' Cake</h5>
		       	    <p class="shop-item-price">121$</p>
		       	   	        </div>
		    </div>
		    
		    <div style="width:250px; height: 250px; border:1px solid grey;background-image: url(/images/project/jas.png);background-size: 100%" id="aya16" class="shop-item-image">
		    	<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a16" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
		    	<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b16"> 
		   	        <h5 class="shop-item-title">'Sweet' Cake</h5>
		         	<p class="shop-item-price">125$</p>
		        			        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://i.pinimg.com/originals/85/f8/3f/85f83fd8eb89b202a3cfbb5dbf25a5f6.jpg);background-size: 100%" id="aya17" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a17" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b17"> 
					<h5 class="shop-item-title">'Ideal' cake</h5>
		       	    <p class="shop-item-price">123$</p>
		       	  		        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(/images/project/112.jpg);background-size: 100%" id="aya18" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a18" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b18"> 
				    <h5 class="shop-item-title">'Emerald' cake</h5>
		       	    <p class="shop-item-price">123$</p>
		       	   		        </div>
		    </div>

			<div style="width:250px; height: 250px; border:1px solid grey;background-image: url(https://dastarkhan24.kz/upload/iblock/915/9159d6fec97451a702eceb9fa96842be.jpg);background-size: 100%" id="aya19" class="shop-item-image">
				<div style="background-color: rgb(0,0,0,0.5);width: 250px;height: 250px;display: none;justify-content: center;" id="a19" >
				    <img src="https://cdn.pixabay.com/photo/2017/03/19/03/48/material-icon-2155442_960_720.png" alt="m" style="width: 100px;height: 50px; margin-top: 110px " class="lara">	
			    </div>
				<div style="background-color: rgb(0,0,0,0.5); width: 250px; height: 90px; margin-top:159px; text-align: center; color: white" id="b19"> 
					<h5 class="shop-item-title">'Fate' Cake</h5>
		       		<p class="shop-item-price">126$</p>
		       				       	</div>
		    </div>
		</div>

	
	

		
	     <div style="width: 700px; margin-left: 100px; border: 1px solid grey; padding: 10px 15px 77px 20px; margin-top: 50px; display: none;margin-bottom: 50px" id="ordering">
		    	<h2 style="margin-bottom: 20px; font-family:cursive;">Your basket</h2>
		    	<hr>
		    	<div class="cart-row">
						<span class="cart-item cart-header cart-column">Items</span>
						<span class="cart-price cart-header cart-column">Price</span>
						<span class="cart-quantity cart-header cart-column">Quantity</span>
				</div>
		    	<div class="cart-items"></div>

					<div class="cart-total">
						<strong class="cart-total-title">Sum</strong>
						<span class="cart-total-price">0</span>
					</div>
          </div>
    
		  <div class="dws-wrapper" style="margin-bottom: -25px; padding-left: 100px; padding-right: 100px">
        	<section class="container">
        		<div class="img-box" id="n5" style="background-image: url(/images/project/f.png);">
    				<div class="content1" id="cnt1" >
    					<h2>Amelia Brown</h2>
    					<p>"{{__('lang1.ceo')}}</p>
    				</div>
        		</div>
        		<div class="img-box" id="n6" style="background-image: url(/images/project/ff.png);">
        			<div class="content1" id="cnt2">
    					<h2>Samuel Adamson</h2>
    					<p>{{__('lang1.sh')}}</p>
    				</div>
        		</div>
        		
        		<div class="img-box" id="n7" style="background-image: url(/images/project/fff.png);">
        			<div class="content1" id="cnt3">
    					<h2>Lily King</h2>
    					<p>{{__('lang1.cfo')}}</p>
    				</div>
        		</div>
        	</section>
            </div>

        	
        	<h1 style="font-family: sans-serif; letter-spacing:5px; padding-left: 80px; margin-bottom: 60px; margin-top: -20px; background-color: lightpink; color:white
        	 ; font-size: 40px " class="rr" id="rr1">{{__('lang1.best')}}</h1>

        	<h1 style="font-family: sans-serif; letter-spacing:5px; padding-left: 80px; margin-bottom: 60px; margin-top: 20px;  color: black;display: none;margin-top:-10px; cursor: pointer;font-size: 30px" id="welc2"><a href="#" style="color: purple">{{__('lang1.candy')}}</a></h1>

        	<div id="iii" style="background-color: white; margin-top:-20px; padding-right: 100px; padding-left: 100px">
        	<section class="container" >

        		<div class="img-box" id="n8" style="background-image: url(https://static.zakon.kz/uploads/posts/2015-01/thumbs/1422335150_117.jpg);">
    				<div class="content1"id="cnt4">
    					<h2>Emily Walker</h2>
    					<p>Chief Accountant</p>
    				</div>
        		</div>

        		<div class="img-box" id="n9" style="background-image: url(https://hornews.com/images/news_large/3c24b5fe2676f6164ebb1366377bda23.gif);">
        			<div class="content1" id="cnt5">
    					<h2>Olivia Smith</h2>
    					<p>General Manager</p>
    				</div>
        		</div>
        		
        		<div class="img-box" id="n10" style="background-image: url(https://www.ivetta.ua/wp-content/uploads/2016/01/desert.jpg);">
        			<div class="content1" id="cnt6">
    					<h2>Scarlett Young</h2>
    					<p>Administrator</p>
    				</div>
        		</div>	
        	 </section>
             </div>



        	
        	

        	<div >
        	<div id="i2" style="background-color: white; margin-top:80px;display:none;">
        	<h1 style="font-family: sans-serif; letter-spacing:5px; padding-left: 80px; margin-top:-20px; margin-bottom:-50px; display: flex; color: white; background-color: brown" class="r" id="rrd">Service at the Highest Level</h1>
			<section class="container">
        		<div class="img-box" id="img-box1" style="background-image: url(https://p1.zoon.ru/1/c/5cb987203e01c33ea0531702_5cbd6e83dfa0b.jpg);"></div>
        		
        		<div class="img-box" id="img-box2" style="background-image: url(https://img.freepik.com/free-photo/waitress-server-helping-client-in-cafe_93675-79171.jpg?size=626&ext=jpg);"></div>
        		<div class="img-box" id="img-box3" style="background-image: url(https://thumbs.dreamstime.com/b/%E5%92%96%E5%95%A1%E9%A6%86%E7%9A%84%E9%A1%BE%E5%AE%A2%E9%80%9A%E8%BF%87%E4%BF%A1%E7%94%A8%E5%8D%A1%E6%94%AF%E4%BB%98%E7%BB%99%E5%94%AE%E8%B4%A7%E5%91%98-141860359.jpg);"></div>
        	</section>
        </div>
        	<div id="i3" style="background-color: white; margin-top:20px; display: none;" >
        	<h1 style="font-family: sans-serif; letter-spacing:5px; padding-left: 80px; margin-bottom: 50px; margin-top: 30px; display: flex;  background-color: brown; color: white" class="r1" id="rrd1">Beautiful and Cozy Place</h1><section class="container">
        		<div class="img-box" id="img-box4" style="background-image: url(https://static.zakon.kz/uploads/posts/2015-01/thumbs/1422335150_117.jpg);"></div>
        		
        		<div class="img-box" id="img-box5" style="background-image: url(https://hornews.com/images/news_large/3c24b5fe2676f6164ebb1366377bda23.gif);"></div>
        		
        		<div class="img-box" id="img-box6" style="background-image: url(https://www.ivetta.ua/wp-content/uploads/2016/01/desert.jpg);"></div>
        	</section>
            </div></div>





        	
        	<div style="margin-top: 50px;margin-left:60px; margin-right:60px;display: none; margin-bottom: 30px" class="viss">
        		<img id="mml" src="https://static.zakon.kz/uploads/posts/2015-01/thumbs/1422335149_124.jpg" alt="kj" style="width: 50%;height:400px;" >
        		<img  id="mmm" src="https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/1/paris-laduree-door-paris-laduree-sign-paris-laduree-architecture-door-storefront-kathy-fornal.jpg?&targetx=-30&targety=0&imagewidth=560&imageheight=700&modelwidth=500&modelheight=700&backgroundcolor=8F9290&orientation=1" alt="hj" style="width: 60%; height: 810px;margin-left: 8px;">
        	</div>

        	<img src="https://www.ivetta.ua/wp-content/uploads/2016/01/laduree-700x467.jpg" alt="jk" style="width: 44.4%; height: 400px;margin-left:60px; margin-right:60px; margin-top: -430px;display: none; margin-bottom: 10px;" class="viss1">
        	
        	<div class="jkl" style="margin-left: 60px; display: none; padding-bottom: 20px">
        	  <h4>{{__('lang1.karaganda')}}</h4>
        	  <p style="margin-left:-116px"><br><br>{{__('lang1.lenin')}}<br>	 +7(747)-288-27-54<br>+7(701)-444-78-89</p>
	        </div>


	        

            <div style="background-color: lightpink; height: 350px; padding-left:460px;padding-top: 40px;  border-top:1px white solid;margin-bottom: -25px" class="fut">
            	<div id="map" style="width: 45%; height: 270px; margin-top: 5px;float: left; margin-left: -180px; margin-right: 110px"></div>	
            		<h2 style="text-align: left; margin-bottom: 50px; margin-top: 50px; margin-left: -520px; font-size: 30px" id="contactt">{{__('lang1.contact')}}</h2>
    				<ul style="list-style-type: none;">
                    <li><a href="https://www.instagram.com/bitlabacademy" target="_blank"><img src="https://pngicon.ru/file/uploads/telegram.png" alt="j" style="width:6.2%; float: left;margin-right: 20px"></a></li>
				    <li><a href="https://telegram.me/zhuanyshev" target="_blank"><img src="https://ladoga-klub.ru/public/template/tmp/facebook_f.png" alt="mj" style="width:6%;float: left;margin-right: 20px"></a></li>
					<li><a href="https://www.facebook.com/bitlab.kz/" target="_blank"><img src="https://www.podushechka.biz/wp-content/uploads/2018/10/instagram-colourful-icon.png" alt="j" style="width:6%;float: left;margin-right: 20px"></a></li>
					<li><a href="https://twitter.com/bitlab_academy"><img src="https://proxy.imgsmail.ru/?email=a9959627%40mail.ru&e=1507893258&h=TxQqsu-PBa9NHNTDvD4obA&url171=aW1nLnN0YXJ0ZW1sLmNvbS9ydS91c2VyX2ZpbGU_cmVzb3VyY2U9aGltZyZ1c2VyX2lkPTc0MjYyMiZuYW1lPTZmY3RjNGlhOWhxZTM5NXp0OXo1d3Juamp4ZTZjaDN6aXIzNzRpMzNpZWd3NzZvN245NGRmcnV1bzhjaDh6bWhydWZjcXpiOG9naTU4YQ~~&is_https=0" alt="j" style="width: 7.5%;margin-right: 20px;padding-top: -20px"></a></li>
                </ul> 
                <p style="margin-left: 110px; color: grey">2020 © Sweet.kz.</p>  </div>

    	
  

	   </body>  @endsection
</html>