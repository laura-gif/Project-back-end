<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>


<body>
    <div id="app">              
                       
        <header  style="margin-top: 0px; height: 50px; background-color: grey; padding-top: 10px ">

             
            <div >
                
                <div style="padding-left: 40px; float: left; margin-right: 1100px">
                            <a  href="/project/en" style="float: left; margin-right: 30px"> en</a>
                            <a  href="/project/ru">ru</a>
                            
                </div>
                <nav class="space-x-4 text-gray-300 text-sm sm:text-base" style="">
                    @guest
                        <a class="no-underline hover:underline" href="/login/en">{{ __('Login') }}</a>
                        @if (Route::has('register'))
                            <a class="no-underline hover:underline" href="/register/en">{{ __('Register') }}</a>
                        @endif
                    @else
                        <span>{{ Auth::user()->name }}</span>

                        <a href="/project/en"
                           class="no-underline hover:underline"
                           onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                            {{ csrf_field() }}
                        </form>
                    @endguest
                </nav>
            </div>

    
          
        </header> </div>
       

</body>
</html>
