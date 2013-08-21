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
		<script type="text/javascript">
			console.log( "Don't forget to put in your Google Analytics ID" );
			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-XXXXX-Y']);
			_gaq.push(['_trackPageview']);
			
			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();
		</script>
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
				generate another
			</a>
			
			<!--firefox os install stuff-->
			<a id="install" class="button firefoxInstall">
				install to Firefox OS
			</a>
		</div>
		
		
    
    
    
    
    
		<?php
			include( 'parts/footerScripts.php' );
			include( 'parts/diagnostic.php' );
		?>
		
		
		<script>
			(function(){
				alert( 'start' );
				if( navigator.mozApps != undefined ) {
					$( '#install' ).css( 'display', 'inline-block' );
					
									//alert( 'ismoz' );
					
					function install(ev) {
						ev.preventDefault();
						// define the manifest URL
						var manifest_url = "http://bandnames.localhost/manifest.webapp";
						// install the app
						var myapp = navigator.mozApps.install(manifest_url);
						
						myapp.onsuccess = function(data) {
							// App is installed, remove button
							this.parentNode.removeChild(this);
						};
					
						myapp.onerror = function() {
							// App wasn't installed, info is in this.error.name
							alert('Install failed, error: ' + this.error.name);
						};
					};
					
					// get a reference to the button and call install() on click
					var button = document.getElementById( 'install' );
					button.addEventListener( 'click', install, false);
				} else {
					wut();
				}
			})();
		</script>
		
		
    </body>
</html>
