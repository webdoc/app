// Make aliases for webdoc, app and app.onload.
window.app = WebDoc.App;


(function(app, undefined){
	var debug = (window.console && console.log);
	
	var ready = false,
	    types = {};

	// Calls all fns in the list for a given type. Passes arguments
	// through to the caller

	function trigger(type) {
		var list = types[type],
		    l, m, fn, args;
		
		// Nothing to trigger
		if ( !list ) { return; }

		// We copy the list in case the original mutates while we're
		// looping over it. We take the arguments, lop of the first entry,
		// and pass the rest to the listeners when we call them.
		list = list.slice(0);
		l = list.length;
		m = -1;
		args = Array.prototype.slice.call(arguments, 1);

		if (debug) { console.group('[trigger]', type); }

		while ( ++m < l ) {
			fn = list[m];
			fn.apply(app, args);
		}

		if (debug) { console.groupEnd(); }
	}
	
	// Adds a listener fn to the list for a given event type.
	
	app.bind = function(type, fn){
		var list = types[type] || (types[type] = []);
		
		// This fn is not a function
		if (typeof fn !== 'function') { return; }
		
		list.push(fn);
	};

	// Removes a listener fn from its list.
	
	app.unbind = function(type, fn){
		var list = types[type],
		    l;
		
		// Nothing to unbind
		if (!list) { return; }
		
		// No function specified, so unbind all by removing the list
		if (!fn) {
			delete types[type];
			return;
		}
		
		// Remove all occurences of this function from the list
		l = list ? list.indexOf(fn) : -1 ;
		
		while (l !== -1) {
		  list.splice(l, 1);
		  l = list.indexOf(fn);
		}
	};
	
	app.ready = function(fn) {
		// If ready has already been fired, fire this callback immediately
		if (ready) { fn.apply(this); }
		// Otherwise bind it to be fired on ready event
		else { app.bind('ready', fn); }
	};
	
	app.onLoad = function() {
		trigger('ready');
	};
	
	app.onSelectionChanged = function(selection) {
		trigger('selectionchange', selection);
	};
})(app);







app.ready(function() {
	console.log('HELLO, WORLD!');
});

app.bind('selectionchange', function() {
	console.log('SELECTION', args);
});

