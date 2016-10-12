var app = require('./index');

app.set('port', 8080);

var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});
