<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sample Hotel websites by IHTechno</title>
        <meta name="description" content="IHTechno specializes in website and mobile application development, offering innovative solutions to enhance your digital presence.">
        <meta property="og:title" content="Sample Hotel Websites by IHTechno | Website and Mobile Application Development">
        <meta property="og:description" content="IHTechno specializes in website and mobile application development, offering innovative solutions to enhance your digital presence.">
        <meta property="og:image" content="{{ asset('/images/og-image.png') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <meta property="og:type" content="website">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

        <!-- website favicon  -->
        <link rel="icon" href="{{ asset('/images/favicon.png') }}" type="image/png"/>

        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>