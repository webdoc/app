// Make aliases for webdoc, app and app.onload.
window.webdoc = WebDoc;
window.app = webdoc.App;
app.onload = app.onLoad;



console.log(webdoc);
console.log(document);

app.onload(function() {
	console.log('APP Loaded');
	
	
	
	
});