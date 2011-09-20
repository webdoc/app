console.log('YEAH');

jQuery('a[href="#log"]').bind('click', function(e) {
	console.group('App log');
	console.log(webdoc);
	
	
	console.groupEnd();
});