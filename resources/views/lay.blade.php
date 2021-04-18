<html>
<body>
<div >
   
  <header style="padding-left: 40px; width: 100%;  background-color:white;height: 85px; margin-bottom: 5px; margin-top: 3px">

        <nav class="menu1"style="padding-top:20px;" >
            <ul style="list-style-type: none; justify-content: center; display: flex;">
                <li style="width:18%; padding-left:50px"onclick="window.location.reload()"><a href="#" ><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/home-512.png" alt="hjg" style="width: 18%; margin-right:14px;" >{{__('lang1.one')}}</a></li>

                <li id="nn" style="width: 15%"><a href="#"><img src="https://img.icons8.com/ios/452/confectionery.png" alt="mm" style="width: 16%; margin-right: 10px">{{__('lang1.four')}}</a> 
                </li>
                        

                <li style="width: 13%" id="n2" onclick="frout()">
                    <a href="#">
                        <img src="https://cdn1.iconfinder.com/data/icons/communication-vol-2/48/061-512.png" alt="ddfg" style="width: 19%; margin-right:15px;">{{__('lang1.two')}}</a>
                </li>
                
                <li style="width:13%;" id="n3">
                    <a href="#">
                        <img src="https://cdn.onlinewebfonts.com/svg/img_398816.png" alt="jkk" style="width: 19%; margin-right:15px;" >{{__('lang1.three')}}</a>
                </li>
            </ul>
        </nav>
        </header>
            <div style="background-color: lightpink; height: 80px; " class="foo">
        <div class=card-body style="width: 45%; margin-left: 500px; float: left">
            <form action="#" role=search >
                <div class="input-group">
                <input type="text" name="query" class="form-control" placeholder="{{__('lang1.search')}}" value="">
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-secondary">{{__('lang1.search')}}</button>
                </span>
                
            </div>
        </form>
        </div>

     
        <a href="#" onclick="qwerty()" >
        <img src="https://gstou.ru/images/unkown.png" alt="nj" style="width: 3%; margin-top: 17px;padding-top: 19px" id="l1">
         </a>



     </div>  
     

    <main class="py-4">
        @yield('content')
    </main>
</div>  
</body>
</html>