	$(document).ready(function(){
    		$('#myButton').click(function(){
    			document.querySelector(".tat").style.display="none";
    		})
    	})



    	$(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });

		function s1(){
			document.querySelector(".s1").style.display="flex";
			
        }

		function close_s1(){
		    document.querySelector(".l1").style.display="none";
		    document.body.style.overflow="scroll";
		    document.getElementById("id1").value="";
		    document.getElementById("id2").value="";
		    document.getElementById("m1").value="";
		    document.getElementById("m2").value="";
		    document.getElementById("m3").value="";
		    document.getElementById("m4").value="";
		    document.getElementById("m5").value="";
		    document.getElementById("m6").value="";
		    }
		
		function login(name){
			document.querySelector(".s3").style.display="inline";
			document.getElementById("user_name").innerHTML= name;
			document.querySelector("#plus1").style.display="none"
			document.querySelector(".s1").style.display="none";
			close_s1();
		}

		function out(){
			document.querySelector('.tat').style.display="none";
		}
		

	    function logout(name){
	    	document.querySelector(".s3").style.display="none";	
		    document.querySelector("#plus1").style.display="inline";
		    document.getElementById("user_name").innerHTML= name;
		    }
	    
	    $(document).ready(function(){
	    	$(".icon").click(function(){
	    		document.querySelector(".s1").style.display="none";	
		        document.querySelector(".s3").style.display="none";	
		        document.querySelector("#plus1").style.display="inline";
	    	})
	    	$("#icon5").click(function(){
	    		document.querySelector(".s1").style.display="none";	
		        document.querySelector(".s3").style.display="none";	
		        document.querySelector("#plus1").style.display="inline";
		        document.querySelector(".l1").style.display="none";

		    })})
	  
	    $(document).ready(function(){
	    	$("#reg").click(function(){
	    		document.querySelector(".l1").style.display="inline";	
		        })})

	    var lastValue = $('select').val(); 
			$('select').on('change', function(e){
    			var value = $(this).val();
     	    	ok=false
     	    	if(ok){
     	    		lastValue=value;
     	    	}else{
     	    		$(this).val(lastValue);
     	    	}});
		function plus(){
			$("#l").click(function(){
				document.querySelector("#plus1").style.visibility="hidden";
				document.querySelector(".s1").style.display="none";	
			})
		}

		function qwerty(){
			$("#l1").click(function(){
				document.querySelector(".profile").style.display="block";
				
				document.querySelector("#plus1").style.visibility="hidden";
				document.querySelector(".s1").style.display="none";
				document.querySelector("#welc").style.display="none";
				document.querySelector(".basc").style.display="none";
				document.querySelector(".first").style.display="none";
				document.querySelector(".second").style.display="none";
				document.querySelector(".third").style.display="none";
				document.querySelector(".fourth").style.display="none";
				
				document.querySelector(".pulse").style.background="brown";
				
				document.querySelector("#mainImg1").style.display="none";
				
			    document.querySelector(".dws-wrapper").style.display="none";
				
				document.querySelector("#iii").style.display="none";
				document.querySelector("#i2").style.display="none";
				document.querySelector("#i3").style.display="none";
				
				document.querySelector(".rr").style.display="none";
				document.querySelector(".r").style.display="none";
				
				document.querySelector(".viss").style.display="none";
				document.querySelector(".viss1").style.display="none";
				document.querySelector(".jkl").style.display="none";
				
				document.querySelector(".fut").style.display="none";
				document.querySelector("#map").style.display="none";
				document.querySelector("#welc1").style.display="none";
				document.querySelector("#welc2").style.display="none";
				document.querySelector("#cakke").style.display="none";
				document.querySelector("#cakke1").style.display="none";
				document.querySelector("#cakke2").style.display="none";
				document.querySelector("#cakke3").style.display="none";
					
			})
		}


		$(document).ready(function(){
			$("#n3").click(function(){
				document.querySelector(".profile").style.display="none";
				document.querySelector("#welc").style.display="flex";
				document.getElementById("welc").innerHTML="Sweetest";
				document.querySelector("#welc").style.color="white";
				document.querySelector("#welc").style.marginTop="0px";
				document.querySelector(".basc").style.display="flex";
				document.querySelector(".basc").style.background="black";
				document.querySelector(".first").style.display="none";
				document.querySelector(".second").style.display="none";
				document.querySelector(".third").style.display="none";
				document.querySelector(".fourth").style.display="none";
				
				document.querySelector(".pulse").style.background="brown";
				
				document.querySelector(".basc").style.color="white";
				document.querySelector("#mainImg1").style.display="none";
				document.querySelector(".texxt").style.display="flex";
				
			    document.querySelector("#n5").style.backgroundImage="url(/images/project/n.jpg)";
				document.querySelector("#n6").style.backgroundImage="url(/images/project/nn.jpg)";
				document.querySelector("#n7").style.backgroundImage="url(/images/project/nnn.jpg)";
				document.querySelector("#n8").style.backgroundImage="url(/images/project/d.jpg)";
				document.querySelector("#n9").style.backgroundImage="url(/images/project/dd.jpg)";
				document.querySelector("#n10").style.backgroundImage="url(/images/project/ddd.jpg)";
				document.querySelector(".dws-wrapper").style.background="black";
				document.querySelector(".dws-wrapper").style.display="flex";
				
				
				document.querySelector("#iii").style.background="black";
				document.querySelector("#iii").style.display="none";
				document.querySelector("#iii").style.marginTop="-80px";
				document.querySelector("#iii").style.marginBottom="-50px";
				
				document.querySelector("#i2").style.display="none";
				document.querySelector("#i3").style.display="none";
				
				document.querySelector("#cnt1").style.display="block";
				document.querySelector("#cnt2").style.display="block";
				document.querySelector("#cnt3").style.display="block";
				document.querySelector("#cnt4").style.display="block";
				document.querySelector("#cnt5").style.display="block";
				document.querySelector("#cnt6").style.display="block";
													
				document.querySelector(".rr").style.display="none";
				document.querySelector(".r").style.display="none";
				
				document.querySelector(".viss").style.display="none";
				document.querySelector(".viss1").style.display="none";
				document.querySelector(".jkl").style.display="none";
				
				document.querySelector(".fut").style.display="none";
				document.querySelector(".fut").style.background="black";
				document.querySelector(".fut").style.height="300px";
				document.querySelector("#contactt").style.textAlign="center";

				document.querySelector(".foo").style.background="darkred";
				
				document.querySelector("#map").style.display="none";
				document.querySelector("#welc1").style.display="none";
				document.querySelector("#welc2").style.display="none";
				document.querySelector("#cakke").style.display="none";
				document.querySelector("#cakke1").style.display="none";
				document.querySelector("#cakke2").style.display="none";
				document.querySelector("#cakke3").style.display="none";
				
			});
		});

		$(document).ready(function(){
			$("#n2").click(function(){
				document.querySelector(".profile").style.display="none";
				document.querySelector("#ordering").style.display="none";
				document.querySelector(".basc").style.display="flex";
				document.querySelector(".basc").style.background="white";
				document.querySelector("#welc").style.display="flex";
				document.querySelector("#welc").style.color="grey";
				document.getElementById("welc").innerHTML="";
				document.querySelector("#welc").style.marginTop="0px";
				document.querySelector("#welc").style.marginLeft="60px";
				
				document.querySelector("#mainImg1").style.display="none";
		        document.querySelector(".texxt").style.display="none";
				document.querySelector(".pulse").style.background="grey";
				
				document.querySelector(".dws-wrapper").style.background="white";
				document.querySelector(".dws-wrapper").style.display="none";
					
				document.querySelector("#iii").style.display="none";
				document.querySelector("#i2").style.display="none";
				document.querySelector("#i3").style.display="none";
				
				document.querySelector(".rr").style.display="none";
				document.querySelector(".r").style.display="none";
				document.querySelector(".r1").style.display="none";
				
				document.querySelector(".viss").style.display="flex";
				document.querySelector(".viss1").style.display="flex";
				document.querySelector(".jkl").style.display="flex";
				
				document.querySelector(".fut").style.background="lightblue";
				document.querySelector(".fut").style.height="300px";
				document.querySelector("#contactt").style.textAlign="center";

				document.querySelector(".foo").style.background="lightblue";
				document.querySelector("#map").style.display="none";
				document.querySelector("#welc1").style.display="none";
				document.querySelector("#welc2").style.display="none";
				document.querySelector("#cakke").style.display="none";
				document.querySelector("#cakke1").style.display="none";
				document.querySelector("#cakke2").style.display="none";
				document.querySelector("#cakke3").style.display="none";
				document.querySelector(".fut").style.display="block";
				document.querySelector(".first").style.display="none";
				document.querySelector(".second").style.display="none";
				document.querySelector(".third").style.display="none";
				document.querySelector(".fourth").style.display="none";
				

			});
		});
		
		
		
		$(document).ready(function(){
			$("#nn").click(function(){
				document.querySelector(".profile").style.display="none";
				document.querySelector(".basc").style.display="flex";
				document.querySelector(".basc").style.background="white";
				document.querySelector(".basc").style.color="black";
				document.querySelector("#welc").style.display="none";
				document.querySelector("#welc1").style.display="flex";
				document.querySelector("#mainImg1").style.display="none";
				document.querySelector(".texxt").style.display="none";
		        
				document.querySelector(".pulse").style.background="purple";
				document.querySelector(".dws-wrapper").style.background="white";
				document.querySelector(".dws-wrapper").style.display="flex";
				
				document.querySelector("#n5").style.backgroundImage="url(/images/project/hg.jpg)";
				document.querySelector("#n6").style.backgroundImage="url(/images/project/hg1.jpg)";
				document.querySelector("#n7").style.backgroundImage="url(/images/project/hg2.jpg)";
				
                document.querySelector("#iii").style.display="flex";
				document.querySelector("#iii").style.background="white";
				document.querySelector("#iii").style.marginTop="-47px";
			
				document.querySelector("#cnt1").style.display="none";
				document.querySelector("#cnt2").style.display="none";
				document.querySelector("#cnt3").style.display="none";
				document.querySelector("#cnt4").style.display="none";
				document.querySelector("#cnt5").style.display="none";
				document.querySelector("#cnt6").style.display="none";
				
				document.querySelector("#n8").style.backgroundImage="url(/images/project/k.jpeg)";
				document.querySelector("#n9").style.backgroundImage="url(/images/project/kk.jpg)";
				document.querySelector("#n10").style.backgroundImage="url(/images/project/kkk.jpg)";
				
				document.querySelector("#i2").style.display="none";
						    
				document.querySelector("#i3").style.display="none";
				
				document.querySelector("#welc2").style.display="flex";
				document.querySelector(".rr").style.display="none";
				
				document.querySelector(".r").style.display="none";
				
				document.querySelector(".r1").style.display="none";
				
				document.querySelector(".viss").style.display="none";
				document.querySelector(".viss1").style.display="none";
				document.querySelector(".jkl").style.display="none";
				
				document.querySelector(".fut").style.display="block";
				document.querySelector(".fut").style.background="white";
				document.querySelector(".fut").style.height="200px";
				document.querySelector("#map").style.display="none";
				document.querySelector("#contactt").style.textAlign="center";

				document.querySelector(".foo").style.background="purple";
				document.querySelector("#cakke").style.display="none";
				document.querySelector("#cakke1").style.display="none";
				document.querySelector("#cakke2").style.display="none";
				document.querySelector("#cakke3").style.display="none";
				document.querySelector("#iii").style.marginBottom="0px";
				document.querySelector(".first").style.display="none";
				document.querySelector(".second").style.display="none";
				document.querySelector(".third").style.display="none";
				document.querySelector(".fourth").style.display="none";
				
				});
		});
			$(document).ready(function(){
			  $("#welc2").click(function(){
			  	document.querySelector(".profile").style.display="none";
				document.querySelector(".basc").style.display="flex";
				document.querySelector(".basc").style.background="white";
				document.querySelector("#welc").style.display="none";
				document.querySelector("#mainImg1").style.display="none";
		        document.querySelector(".texxt").style.display="none";
				
				document.querySelector(".dws-wrapper").style.background="white";
				document.querySelector(".dws-wrapper").style.display="none";
					
				document.querySelector("#iii").style.display="none";
				document.querySelector("#i2").style.display="none";
				document.querySelector("#i3").style.display="none";
				
				document.querySelector(".rr").style.display="none";
				document.querySelector(".r").style.display="none";
				document.querySelector(".r1").style.display="none";
				
				document.querySelector(".viss").style.display="none";
				document.querySelector(".viss1").style.display="none";
				document.querySelector(".jkl").style.display="none";
				
				document.querySelector(".fut").style.display="none";
				
				document.querySelector(".foo").style.background="lightblue";
				document.querySelector("#map").style.display="none";
				document.querySelector("#welc1").style.display="none";
				document.querySelector("#welc2").style.display="none";
				document.querySelector("#cakke").style.display="flex";
				document.querySelector("#cakke1").style.display="flex";
				document.querySelector("#cakke2").style.display="none";
				document.querySelector("#cakke3").style.display="none";
				document.querySelector('#aya').style.backgroundSize="115%";
				document.querySelector('#aya').style.backgroundImage="url(http://cdn.albaneseconfectionery.com/candy-store/images/products/popup/milk-chocolate-pretzel-balls_2.jpg)";
				document.getElementById("dan").innerHTML="La Madeline au Truffe";
				document.getElementById("lan").innerHTML="150$";
				document.querySelector('#aya1').style.backgroundImage="url(https://chocodiva.ru/d/klubnika_v_shokolade_24_sht_71.png)";
				document.querySelector('#aya1').style.backgroundSize="100%";				
				document.getElementById("dan1").innerHTML="Vosges";
				document.getElementById("lan1").innerHTML="78$";
				document.querySelector('#aya2').style.backgroundImage="url(https://cs5.livemaster.ru/storage/ca/ae/45aaedb7977f87e98090ca06d63y--podarki-k-prazdnikam-konfety-ruchnoj-raboty.jpg)";
				document.querySelector('#aya2').style.backgroundSize="110%";
				document.getElementById("dan2").innerHTML="To'ak";
				document.getElementById("lan2").innerHTML="150$";
				document.querySelector("#aya3").style.backgroundImage="url(https://chocodiva.ru/d/dddss123.png)";
				document.getElementById("dan3").innerHTML="Godiva";
				document.getElementById("lan3").innerHTML="148$";				
				document.querySelector('#aya3').style.backgroundSize="110%";
				document.querySelector("#aya4").style.backgroundImage="url(https://benkoni.com/image/catalog/blog/tovary-i-sslyki/shokoladnye-konfety-benkoni-ruchnaya-rabota-brendirovanie.jpg)";
				document.getElementById("dan4").innerHTML="Pierre Marcolin";
				document.getElementById("lan4").innerHTML="128$";				
				
				document.querySelector("#aya5").style.backgroundImage="url(https://s.sakh.com/i/b/market/2019/11/11/6333e80dd95cbaae5f4d28e783183928.jpeg)";
				document.getElementById("dan5").innerHTML="Torre";
				document.getElementById("lan5").innerHTML="68$";				
				document.querySelector("#aya6").style.backgroundImage="url(https://ябысъел.рф/wp-content/uploads/%D0%B1%D0%B1%D0%B1%D0%B1%D0%B1-600x600.jpg)";
				document.getElementById("dan6").innerHTML="Donnelly";
				document.getElementById("lan6").innerHTML="76$";				
				document.querySelector("#aya7").style.backgroundImage="url(https://im0-tub-ru.yandex.net/i?id=8b79f799c2fe1ebd79a92d306ef036ce-l&ref=rim&n=13&w=1080&h=1281)";
				document.getElementById("dan7").innerHTML="Ozer";
				document.getElementById("lan7").innerHTML="82$";				
				document.querySelector("#aya8").style.backgroundImage='url(https://s.sakh.com/i/b/market/2019/11/11/4b8a214edb70e1e846be8735b3af05d6.jpeg)';
				document.getElementById("dan8").innerHTML="Gera";
				document.getElementById("lan8").innerHTML="82$";				
				document.querySelector("#aya9").style.backgroundImage="url(https://im0-tub-ru.yandex.net/i?id=c264f4f1a40701637e01f9a6eacb5a19-l&ref=rim&n=13&w=640&h=640)";
				document.getElementById("dan9").innerHTML="GF";
				document.getElementById("lan9").innerHTML="87$";				
				document.querySelector("#cakke1").style.marginBottom='50px';
				
				$(document).ready(function(){
					$('#aya').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='150$';
				        document.querySelector(".bts").innerHTML="Truffe";
				        document.getElementById("bts2").src="http://cdn.albaneseconfectionery.com/candy-store/images/products/popup/milk-chocolate-pretzel-balls_2.jpg";
				        document.querySelector("#para").innerHTML="'Truffe' is made from choco based on condensed milk and saturated with melting filling made from soft whipped cream. Decorated with fresh strawberries and deliciously complements a cup of coffee or tea.";
				         document.querySelector(".icon1").style.marginTop="-480px";
						

				    })
					$('#aya1').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='78$';
				        document.querySelector(".bts").innerHTML="Vosges";
						document.getElementById("bts2").src="https://chocodiva.ru/d/klubnika_v_shokolade_24_sht_71.png";
						document.querySelector("#para").innerHTML="An appetizing red sponge cake soaked in cream based on Mascarpone cheese has an exquisite taste and will delightfully complement a cup of tea on a festive table.";
						document.querySelector(".icon1").style.marginTop="-430px";
						
					})
					$('#aya2').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='150$';
				        document.querySelector(".bts").innerHTML="To'ak";
						document.getElementById("bts2").src="https://cs5.livemaster.ru/storage/ca/ae/45aaedb7977f87e98090ca06d63y--podarki-k-prazdnikam-konfety-ruchnoj-raboty.jpg";
						document.querySelector("#para").innerHTML="We prepare exclusive handmade cakes to order. For wedding, anniversary and birthday. Single and multi-tiered with a unique composition - patterns, flowers and berries.";
						document.querySelector(".icon1").style.marginTop="-430px";
						

					})
					$('#aya3').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='148$';
				        document.querySelector(".bts").innerHTML="Godiva";
						document.getElementById("bts2").src="https://chocodiva.ru/d/dddss123.png";
						document.querySelector("#para").innerHTML="Appetizing chocolate cake with delicate butter cream, decorated with airy cream, grated chocolate and juicy cherries. Will decorate any feast and give sweet pleasure!";
						document.querySelector(".icon1").style.marginTop="-430px";
						

					})
					$('#aya4').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='128$';
				        document.querySelector(".bts").innerHTML="Pierre Marcolin";
						document.getElementById("bts2").src="https://benkoni.com/image/catalog/blog/tovary-i-sslyki/shokoladnye-konfety-benkoni-ruchnaya-rabota-brendirovanie.jpg";
						document.querySelector("#para").innerHTML="Delicious chocolate sponge cake, the most delicate layer of custard with boiled condensed milk and all this is decorated with chocolate cream - our Prague cake is so good that there is nothing to add. Well, maybe a cup of hot tea or coffee.";
						document.querySelector(".icon1").style.marginTop="-480px";
						
					})
					$('#aya5').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='68$';
				        document.querySelector(".bts").innerHTML="Torre";
						document.getElementById("bts2").src="https://s.sakh.com/i/b/market/2019/11/11/6333e80dd95cbaae5f4d28e783183928.jpeg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="A cake made of fragrant honey cakes is soaked in delicate creamy curd cream and decorated with chocolate mastic, airy meringues and fresh berries. A bright addition to any holiday!";

					})
					$('#aya6').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='76$';
				        document.querySelector(".bts").innerHTML="Donnelly";
						document.getElementById("bts2").src="https://ябысъел.рф/wp-content/uploads/%D0%B1%D0%B1%D0%B1%D0%B1%D0%B1-600x600.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Delicate cake made of condensed milk based cakes, saturated with melting soft whipped cream filling and festively decorated by our pastry chef. A tasty addition to the festive table.";


					})
					$('#aya7').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='82$';
				        document.querySelector(".bts").innerHTML="Ozer";
						document.getElementById("bts2").src="https://chocorua.ru/image/cache/catalog/1C_img/2000163_5-1200x1200.jpeg";
						document.querySelector(".icon1").style.marginTop="-430px";
						document.querySelector("#para").innerHTML="An unusual combination of products - carrots, raisins and walnuts with a delicious biscuit soaked in cheese cream in the 'Carrot' cake. Try a bite of this tasty treat.";


					})
					$('#aya8').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='82$';
				        document.querySelector(".bts").innerHTML="Gera";
						document.getElementById("bts2").src="https://s.sakh.com/i/b/market/2019/11/11/4b8a214edb70e1e846be8735b3af05d6.jpeg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="This appetizing biscuit cake is prepared by the pastry chef of Yubileiny from natural ingredients according to a home recipe. Contains crispy meringue pieces, infused with delicate butter cream.";

					})
					$('#aya9').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='87$';
				        document.querySelector(".bts").innerHTML="GF";
						document.getElementById("bts2").src="https://im0-tub-ru.yandex.net/i?id=c264f4f1a40701637e01f9a6eacb5a19-l&ref=rim&n=13&w=640&h=640";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Delicate yoghurt cake, melting in your mouth, made on the basis of creamy curd mousse and soaked in syrup. Covered with soft glaze, garnished with whipped cream and aromatic berries.";

					});});
				
			});
		});
		
		$(document).ready(function(){
			$("#welc1").click(function(){
				document.querySelector(".profile").style.display="none";
				document.querySelector(".basc").style.display="flex";
				document.querySelector(".basc").style.background="white";
				document.querySelector("#welc").style.display="none";
				document.querySelector("#mainImg1").style.display="none";
		        document.querySelector(".texxt").style.display="none";
				
				document.querySelector(".dws-wrapper").style.background="white";
				document.querySelector(".dws-wrapper").style.display="none";
					
				document.querySelector("#iii").style.display="none";
				document.querySelector("#i2").style.display="none";
				document.querySelector("#i3").style.display="none";
				
				document.querySelector(".rr").style.display="none";
				document.querySelector(".r").style.display="none";
				document.querySelector(".r1").style.display="none";
				
				document.querySelector(".viss").style.display="none";
				document.querySelector(".viss1").style.display="none";
				document.querySelector(".jkl").style.display="none";
				
				document.querySelector(".fut").style.display="none";
				
				document.querySelector(".foo").style.background="lightblue";
				document.querySelector("#map").style.display="none";
				document.querySelector("#welc1").style.display="none";
				document.querySelector("#welc2").style.display="none";
				document.querySelector("#cakke").style.display="flex";
				document.querySelector("#cakke1").style.display="flex";
				document.querySelector("#cakke2").style.display="flex";
				document.querySelector("#cakke3").style.display="flex";
				document.querySelector("#aya").style.backgroundImage="url(/images/project/uu.jpg)";
				document.querySelector("#aya1").style.backgroundImage="url(/images/project/milky.png)";
				document.querySelector("#aya2").style.backgroundImage="url(/images/project/pinkk.jpg)";
				document.querySelector("#aya3").style.backgroundImage="url(https://natashabakes.com/wp-content/uploads/2018/12/moms-chocolate-cake-XL-RECIPE0918.jpg)";
				document.querySelector("#aya4").style.backgroundImage="url(/images/project/cd.png)";
				document.querySelector("#aya5").style.backgroundImage="url(https://heavenlycakepops.com/wp-content/uploads/2015/01/HCP-Easy-Roller-Rainbow-cake.jpg)";
				document.querySelector("#aya6").style.backgroundImage="url(/images/project/hg.jpg)";
				document.querySelector("#aya7").style.backgroundImage="url(https://dastarkhan24.kz/upload/iblock/2f8/2f89093fb486d306ef1a7e572d4e95c2.jpg)";
				document.querySelector("#aya8").style.backgroundImage="url(https://dastarkhan24.kz/upload/iblock/121/1211cc8630feb33cc71b20cd120ccf7e.jpg)";
				document.querySelector("#aya9").style.backgroundImage="url(https://www.cakeclicks.com/images/cakeclicks/57/572467a49b163fd3416d58c6877dcde1.jpeg)";
				document.querySelector("#cakke1").style.marginBottom='0px';				
				document.querySelector("#ordering").style.display="none";
				document.querySelector("#aya").style.backgroundSize="100%";
				document.querySelector("#aya1").style.backgroundSize="100%";
				document.querySelector("#aya2").style.backgroundSize="100%";
				document.querySelector("#aya3").style.backgroundSize="150%";
				document.querySelector("#aya4").style.backgroundSize="100%";
				document.querySelector("#aya5").style.backgroundSize="150%";
				document.querySelector("#aya6").style.backgroundSize="100%";
				document.querySelector("#aya7").style.backgroundSize="100%";
				document.querySelector("#aya8").style.backgroundSize="100%";
				document.querySelector("#aya9").style.backgroundSize="160%";
				
				$(document).ready(function(){
					$('#aya').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='123$';
				        document.querySelector(".bts").innerHTML="'Milky' Cake";
				        document.getElementById("bts2").src="/images/project/uu.jpg";
				        document.querySelector("#para").innerHTML="Delicate cake 'Milk Girl' is made from cakes based on condensed milk and saturated with melting filling made from soft whipped cream. Decorated with fresh strawberries and deliciously complements a cup of coffee or tea.";
				         document.querySelector(".icon1").style.marginTop="-480px";
						

				    })
					$('#aya1').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='93$';
				        document.querySelector(".bts").innerHTML="'Red Velvet'";
						document.getElementById("bts2").src="/images/project/milky.png";
						document.querySelector("#para").innerHTML="An appetizing red sponge cake soaked in cream based on Mascarpone cheese has an exquisite taste and will delightfully complement a cup of tea on a festive table.";
						document.querySelector(".icon1").style.marginTop="-430px";
						
					})
					$('#aya2').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='110$';
				        document.querySelector(".bts").innerHTML="'Customized' Cake";
						document.getElementById("bts2").src="/images/project/pinkk.jpg";
						document.querySelector("#para").innerHTML="We prepare exclusive handmade cakes to order. For wedding, anniversary and birthday. Single and multi-tiered with a unique composition - patterns, flowers and berries.";
						document.querySelector(".icon1").style.marginTop="-480px";
						

					})
					$('#aya3').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='80$';
				        document.querySelector(".bts").innerHTML="'Kiev' Cake";
						document.getElementById("bts2").src="https://natashabakes.com/wp-content/uploads/2018/12/moms-chocolate-cake-XL-RECIPE0918.jpg";
						document.querySelector("#para").innerHTML="Appetizing chocolate cake with delicate butter cream, decorated with airy cream, grated chocolate and juicy cherries. Will decorate any feast and give sweet pleasure!";
						document.querySelector(".icon1").style.marginTop="-430px";
						

					})
					$('#aya4').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='120$';
				        document.querySelector(".bts").innerHTML="'Prague' Cake";
						document.getElementById("bts2").src="/images/project/cd.png";
						document.querySelector("#para").innerHTML="Delicious chocolate sponge cake, the most delicate layer of custard with boiled condensed milk and all this is decorated with chocolate cream - our Prague cake is so good that there is nothing to add. Well, maybe a cup of hot tea or coffee.";
						document.querySelector(".icon1").style.marginTop="-480px";
						
					})
					$('#aya5').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='100$';
				        document.querySelector(".bts").innerHTML="'Anniversary' Cake";
						document.getElementById("bts2").src="https://heavenlycakepops.com/wp-content/uploads/2015/01/HCP-Easy-Roller-Rainbow-cake.jpg";
						document.querySelector(".icon1").style.marginTop="-500px";
						document.querySelector("#para").innerHTML="A cake made of fragrant honey cakes is soaked in delicate creamy curd cream and decorated with chocolate mastic, airy meringues and fresh berries. A bright addition to any holiday!";

					})
					$('#aya6').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='93$';
				        document.querySelector(".bts").innerHTML="'Milky Girl' Cake";
						document.getElementById("bts2").src="/images/project/hg.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Delicate cake made of condensed milk based cakes, saturated with melting soft whipped cream filling and festively decorated by our pastry chef. A tasty addition to the festive table.";


					})
					$('#aya7').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='102$';
				        document.querySelector(".bts").innerHTML="'Carrot' Cake";
						document.getElementById("bts2").src="https://dastarkhan24.kz/upload/iblock/2f8/2f89093fb486d306ef1a7e572d4e95c2.jpg";
						document.querySelector(".icon1").style.marginTop="-430px";
						document.querySelector("#para").innerHTML="An unusual combination of products - carrots, raisins and walnuts with a delicious biscuit soaked in cheese cream in the 'Carrot' cake. Try a bite of this tasty treat.";


					})
					$('#aya8').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='91$';
				        document.querySelector(".bts").innerHTML="'Eden' Cake";
						document.getElementById("bts2").src="https://dastarkhan24.kz/upload/iblock/121/1211cc8630feb33cc71b20cd120ccf7e.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="This appetizing biscuit cake is prepared by the pastry chef of Yubileiny from natural ingredients according to a home recipe. Contains crispy meringue pieces, infused with delicate butter cream.";

					})
					$('#aya9').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='120$';
				        document.querySelector(".bts").innerHTML="'Yoghurt' Cake";
						document.getElementById("bts2").src="https://www.cakeclicks.com/images/cakeclicks/57/572467a49b163fd3416d58c6877dcde1.jpeg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Delicate yoghurt cake, melting in your mouth, made on the basis of creamy curd mousse and soaked in syrup. Covered with soft glaze, garnished with whipped cream and aromatic berries.";

					})
					
					$('#aya10').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='99$';
				        document.querySelector(".bts").innerHTML="'Napoleon' Cake";
						document.getElementById("bts2").src="https://data.whicdn.com/images/320019145/original.jpg";
						document.querySelector(".icon1").style.marginTop="-410px";
						document.querySelector("#para").innerHTML="The famous Napoleon cake is made according to the classic recipe from the finest puff cakes soaked in delicate custard cream.";


					})
					$('#aya11').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='98$';
				        document.querySelector(".bts").innerHTML="'Eva' Cake";
						document.getElementById("bts2").src="/images/project/black.jpg";
						document.querySelector(".icon1").style.marginTop="-430px";
						document.querySelector("#para").innerHTML="Delicate cake - ice cream is made of biscuit and crispy meringue with the addition of spicy prunes, walnuts and cream-brül. A worthy dessert for the fastidious sweet tooth!";


					})
					$('#aya12').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='123$';
				        document.querySelector(".bts").innerHTML="'Berry' Cake";
						document.getElementById("bts2").src="https://img.buzzfeed.com/buzzfeed-static/static/2019-11/25/20/asset/a94c546cdc9c/sub-buzz-1105-1574713306-1.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Delicate cake made of airy sponge cake is complemented with poppy seeds, nuts, raisins and soaked in sour cream. A piece of this culinary masterpiece will cheer you up for the whole day";

					})
					$('#aya13').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='98$';
				        document.querySelector(".bts").innerHTML="'Curd' Cake";
						document.getElementById("bts2").src="https://dastarkhan24.kz/upload/iblock/01d/01d16ba95321f727ea204f73cdc30c06.jpg";
						document.querySelector(".icon1").style.marginTop="-430px";
						document.querySelector("#para").innerHTML="Delicate and light dessert cake made from cottage cheese and delicious berries will be an excellent addition to a cup of fragrant tea and will make your day sweet.";


					})
					$('#aya14').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='126$';
				        document.querySelector(".bts").innerHTML="'Alen' Cake";
						document.getElementById("bts2").src="/images/project/2c.jpg";
						document.querySelector(".icon1").style.marginTop="-430px";
						document.querySelector("#para").innerHTML="An appetizing cake made from natural selected ingredients, has a creamy taste with vanilla notes, is saturated with delicate cream and covered with chocolate.";



					})
					$('#aya15').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='121$';
				        document.querySelector(".bts").innerHTML="'Torte' Cake";
						document.getElementById("bts2").src="/images/project/a2.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Our pastry chefs have baked a large assortment of sweet masterpieces for every taste especially for the holiday. Arrange yourself an unforgettably romantic and incredibly delicious holiday.";


					})
					$('#aya16').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='125$';
				        document.querySelector(".bts").innerHTML="'Sweet' Cake";
						document.getElementById("bts2").src="/images/project/jas.png";
						document.querySelector(".icon1").style.marginTop="-430px";
						document.querySelector("#para").innerHTML="A yoghurt cake that melts gently in your mouth, soaked in syrup and covered with soft icing. The sweet treat is adorned with whipped cream and aromatic berries.";


					})
					$('#aya17').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='123$';
				        document.querySelector(".bts").innerHTML="'Ideal' Cake";
						document.getElementById("bts2").src="https://i.pinimg.com/originals/85/f8/3f/85f83fd8eb89b202a3cfbb5dbf25a5f6.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="The famous Napoleon cake will delight aesthetes. Puff cakes soaked in delicate cream and decorated with appetizing caramel filling. A harmonious combination of taste and elegant design!";


					})
					$('#aya18').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='123$';
				        document.querySelector(".bts").innerHTML="'Emerald' Cake";
						document.getElementById("bts2").src="/images/project/112.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="Everyone's favorite cake 'Red Velvet' is now in a new role. A tender green biscuit cake soaked in creamy cream based on aromatic Mascarpone cheese will impress even the most sophisticated sweets lover.";



					})
					$('#aya19').click(function(){
						document.querySelector(".tat").style.display="flex";
				        document.querySelector(".bts1").innerHTML='126$';
				        document.querySelector(".bts").innerHTML="'Fate' Cake";
						document.getElementById("bts2").src="https://dastarkhan24.kz/upload/iblock/915/9159d6fec97451a702eceb9fa96842be.jpg";
						document.querySelector(".icon1").style.marginTop="-450px";
						document.querySelector("#para").innerHTML="An amazing tandem of juicy raspberries, delicate curd cream and a crumbly sand basket will tastefully complement a cup of tea. The cake is made in two sizes: standard and mini.";
					})
				})


			});
		});


			
		$(document).ready(function(){
			$('#aya').mouseover(function(){
				document.querySelector("#a").style.display="flex";
			    document.querySelector("#b").style.display="none";
			})
			$('#aya').mouseout(function(){
				document.querySelector("#a").style.display="none";
			    document.querySelector("#b").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya1').mouseover(function(){
				document.querySelector("#a1").style.display="flex";
			    document.querySelector("#b1").style.display="none";
			})
			$('#aya1').mouseout(function(){
				document.querySelector("#a1").style.display="none";
			    document.querySelector("#b1").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya2').mouseover(function(){
				document.querySelector("#a2").style.display="flex";
			    document.querySelector("#b2").style.display="none";
			})
			$('#aya2').mouseout(function(){
				document.querySelector("#a2").style.display="none";
			    document.querySelector("#b2").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya3').mouseover(function(){
				document.querySelector("#a3").style.display="flex";
			    document.querySelector("#b3").style.display="none";
			})
			$('#aya3').mouseout(function(){
				document.querySelector("#a3").style.display="none";
			    document.querySelector("#b3").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya4').mouseover(function(){
				document.querySelector("#a4").style.display="flex";
			    document.querySelector("#b4").style.display="none";
			})
			$('#aya4').mouseout(function(){
				document.querySelector("#a4").style.display="none";
			    document.querySelector("#b4").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya5').mouseover(function(){
				document.querySelector("#a5").style.display="flex";
			    document.querySelector("#b5").style.display="none";
			})
			$('#aya5').mouseout(function(){
				document.querySelector("#a5").style.display="none";
			    document.querySelector("#b5").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya6').mouseover(function(){
				document.querySelector("#a6").style.display="flex";
			    document.querySelector("#b6").style.display="none";
			})
			$('#aya6').mouseout(function(){
				document.querySelector("#a6").style.display="none";
			    document.querySelector("#b6").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya7').mouseover(function(){
				document.querySelector("#a7").style.display="flex";
			    document.querySelector("#b7").style.display="none";
			})
			$('#aya7').mouseout(function(){
				document.querySelector("#a7").style.display="none";
			    document.querySelector("#b7").style.display="block";
			})	

		})
		$(document).ready(function(){
			$('#aya8').mouseover(function(){
				document.querySelector("#a8").style.display="flex";
			    document.querySelector("#b8").style.display="none";
			})
			$('#aya8').mouseout(function(){
				document.querySelector("#a8").style.display="none";
			    document.querySelector("#b8").style.display="block";
			})	

		})

			$(document).ready(function(){
			$('#aya9').mouseover(function(){
				document.querySelector("#a9").style.display="flex";
			    document.querySelector("#b9").style.display="none";
			})
			$('#aya9').mouseout(function(){
				document.querySelector("#a9").style.display="none";
			    document.querySelector("#b9").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya10').mouseover(function(){
				document.querySelector("#a10").style.display="flex";
			    document.querySelector("#b10").style.display="none";
			})
			$('#aya10').mouseout(function(){
				document.querySelector("#a10").style.display="none";
			    document.querySelector("#b10").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya11').mouseover(function(){
				document.querySelector("#a11").style.display="flex";
			    document.querySelector("#b11").style.display="none";
			})
			$('#aya11').mouseout(function(){
				document.querySelector("#a11").style.display="none";
			    document.querySelector("#b11").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya12').mouseover(function(){
				document.querySelector("#a12").style.display="flex";
			    document.querySelector("#b12").style.display="none";
			})
			$('#aya12').mouseout(function(){
				document.querySelector("#a12").style.display="none";
			    document.querySelector("#b12").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya13').mouseover(function(){
				document.querySelector("#a13").style.display="flex";
			    document.querySelector("#b13").style.display="none";
			})
			$('#aya13').mouseout(function(){
				document.querySelector("#a13").style.display="none";
			    document.querySelector("#b13").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya14').mouseover(function(){
				document.querySelector("#a14").style.display="flex";
			    document.querySelector("#b14").style.display="none";
			})
			$('#aya14').mouseout(function(){
				document.querySelector("#a14").style.display="none";
			    document.querySelector("#b14").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya15').mouseover(function(){
				document.querySelector("#a15").style.display="flex";
			    document.querySelector("#b15").style.display="none";
			})
			$('#aya15').mouseout(function(){
				document.querySelector("#a15").style.display="none";
			    document.querySelector("#b15").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya16').mouseover(function(){
				document.querySelector("#a16").style.display="flex";
			    document.querySelector("#b16").style.display="none";
			})
			$('#aya16').mouseout(function(){
				document.querySelector("#a16").style.display="none";
			    document.querySelector("#b16").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya17').mouseover(function(){
				document.querySelector("#a17").style.display="flex";
			    document.querySelector("#b17").style.display="none";
			})
			$('#aya17').mouseout(function(){
				document.querySelector("#a17").style.display="none";
			    document.querySelector("#b17").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya18').mouseover(function(){
				document.querySelector("#a18").style.display="flex";
			    document.querySelector("#b18").style.display="none";
			})
			$('#aya18').mouseout(function(){
				document.querySelector("#a18").style.display="none";
			    document.querySelector("#b18").style.display="block";
			})	

		})
			$(document).ready(function(){
			$('#aya19').mouseover(function(){
				document.querySelector("#a19").style.display="flex";
			    document.querySelector("#b19").style.display="none";
			})
			$('#aya19').mouseout(function(){
				document.querySelector("#a19").style.display="none";
			    document.querySelector("#b19").style.display="block";
			})	

		})


		
		ymaps.ready(init);

function init() {
    // Creating the map.
    var myMap = new ymaps.Map("map", {
            center: [49.7856667648698,73.10822599999995],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Creating a circle.
    var myCircle = new ymaps.Circle([
        // The coordinates of the center of the circle.
        [49.7856667648698,73.10822599999995],
        // The radius of the circle in meters.
        700
    ], {
        /**
         * Describing the properties of the circle.
         * The contents of the balloon.
         */
        balloonContent: "frequent visit",
        // The contents of the hint.
        
    }, {
        /**
         * Setting the circle options.
         * Enabling drag-n-drop for the circle.
         */
        draggable: true,
        /**
         * Fill color.
         * The last byte (77) defines transparency.
         * The transparency of the fill can also be set using the option "fillOpacity".
         */
        fillColor: "#DB000377",
        // Stroke color.
        strokeColor: "#808080",
        // Stroke transparency.
        strokeOpacity: 0.8,
        // The width of the stroke in pixels.
        strokeWidth: 3
    });

  

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Nura',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-105, -158]
        }),

        myPlacemarkCont = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Avenue',
            balloonContent: 'The '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [105, 58],

        }),
  
  		 myPlacemarkWithCont = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Sweetest',
            balloonContent: 'The best pastry shop in this city'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-55, -48],
            
        }),
          myMap.geoObjects
        .add(myPlacemark)
        .add(myCircle)
        .add(myPlacemarkCont)
        .add(myPlacemarkWithCont);
    }