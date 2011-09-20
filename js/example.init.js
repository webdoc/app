// Make aliases for webdoc, app and app.onload.
window.webdoc = WebDoc;
window.app = webdoc.App;
app.onload = app.onLoad;
app.onselection = app.onSelectionChange;



console.log(webdoc);
console.log(document);

app.onload(function() {
	console.log('APP Loaded', arguments);
	
	
	
	
});

app.onselection(function(selection) {
	console.log('APP selection', selection);
	
	
});