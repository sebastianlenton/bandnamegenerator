//firefox OS app stuff
function checkIsInstalled( manifest ) {
	if( navigator.mozApps != undefined ) {
		var request = navigator.mozApps.checkInstalled( manifest );
		
		request.onerror = function(e) {
			alert("Error calling checkInstalled: " + request.error.name);
		};
		request.onsuccess = function(e) {
			if ( !request.result ) {
				//alert( 'not installed' );
				doFirefoxButtonStuff( manifest );
			} else {
				//alert( 'is installed' );
			}
		};
	}
}

function doFirefoxButtonStuff( manifest ){
	if( navigator.mozApps != undefined ) {									//if its a firefox os supporting environment
		$( "#install" ).css( "display", "inline-block" );
		function install(ev) {
			ev.preventDefault();
			// define the manifest URL
			var manifest_url = manifest;//"http://bandnames.sebastianlenton.com/manifest.webapp";
			// install the app
			var myapp = navigator.mozApps.install(manifest_url);
			
			myapp.onsuccess = function(data) {
				// App is installed, remove button
				$( "#install" ).remove();
				this.parentNode.removeChild(this);
			};
		
			myapp.onerror = function() {
				// App wasn't installed, info is in this.error.name
				if( this.error.name == "REINSTALL_FORBIDDEN" ) {
					alert( "You've already installed this.");
				} else {
					alert('Install failed, error: ' + this.error.name);	
				}
			};
		};
		
		// get a reference to the button and call install() on click
		var button = document.getElementById( 'install' );
		button.addEventListener( 'click', install, false);
	} else {
		alert( 'checkinstalled says is installed' );
	}
};

//boilerplate-y stuff
//cookies - http://www.quirksmode.org/js/cookies.html
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie( name ) {
	createCookie(name,"",-1);
}

//if the cookie is present, erase. If it's not present, create
function toggleCookie( name, value, days ) {
	if( readCookie( name ) ) {
		eraseCookie( name );
	} else {
		createCookie( name, value, days );
	}
}

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// debouncing function from John Hann
//http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
//http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/
(function($,sr){ 
  var debounce = function (func, threshold, execAsap) {
      var timeout;
 
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };
 
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
 
          timeout = setTimeout(delayed, threshold || 50); 					//lower value makes it more responsive
      };
  }
	// smartresize 
	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');

