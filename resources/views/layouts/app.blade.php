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
<body class="bg-gray-100 h-screen antialiased leading-none font-sans"  style="background-image: url(http://ramki-vsem.ru/fon/rozovyj-fon31.jpg);background-size: 100%">
    <div id="app">
        <header class="bg-blue-900 py-6" style="background-color: purple">
            <div class="container mx-auto flex justify-between items-center px-6">
                <div>
                      
                           
                            
                
                    <a href="{{ url('/project/en') }}" class="text-lg font-semibold text-gray-100 no-underline">
                        {{ __('lang3.Main') }}
                    </a> 
                    <a  href="/register/en" href="/login/en"style="float: left; margin-right: 20px; color: white"> en</a>
                    <a  href="/register/ru"  style="color: white;float: left; margin-right: 30px">ru</a>
                </div>
                <nav class="space-x-4 text-gray-300 text-sm sm:text-base">
                    @guest
                        <a class="no-underline hover:underline" href="/login/ru">{{ __('lang3.Login') }}</a>
                        @if (Route::has('register'))
                            <a class="no-underline hover:underline" href="/register/en">{{ __('lang3.Register') }}</a>
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
        </header>

       
    </div>
<main class="py-4">
     @yield('content')</main>
</body>
</html>
