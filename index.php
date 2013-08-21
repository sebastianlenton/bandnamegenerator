<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Band name Generator</title>
        <meta name="description" content="">
        
<!--		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">-->
        
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        
        <meta name="HandheldFriendly" content="true"/>  
        <meta name="MobileOptimized" content="320"/>

		<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
        
        <!--[if lt IE 9]>
	        <link rel='stylesheet' id='bones-ie-only-css'  href='/css/ie.css' type='text/css' media='all' />
		<![endif]-->
		
		<!--[if gte IE 9]>
			<style type="text/css">
				.gradient {
					filter: none;
				}
			</style>
		<![endif]-->

        <script src="js/libs/modernizr-2.6.2.min.js"></script>
        
		<link rel="apple-touch-icon" href="/img/apple-icon-touch.png">
		<link rel="icon" href="/img/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="/favicon.ico">
		<![endif]-->
		<?php //or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f7f7f7">
		<meta name="msapplication-TileImage" content="/img/win8-tile-icon.png">
    </head>
    <body>
		<div class="action">
	    	<h1>
    			your new band is called...
			</h1>
		
			<h2>
				&nbsp;
			</h2>
		</div>
		
		<div class="controls">
			<a class="button generate">
				I want another.
			</a>
			
			<!--firefox os install stuff-->
			<a id="install" class="button firefoxInstall">
				Install to Firefox OS!
			</a>
		</div>

		<?php
			include( 'parts/footerScripts.php' );
			include( 'parts/diagnostic.php' );
		?>
		
		<script>
			
		</script>
    </body>
</html>
