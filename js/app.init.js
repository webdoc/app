app.ready(function() {
  console.log("Yeah, I'm ready NOW!");
});

app.bind('selectionchange', function(data) {
  console.log("sleection has changed:", data);
});