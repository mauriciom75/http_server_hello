var express = require('express');
var serveIndex = require('serve-index');
var app = express();

app.use( function ( req, res, next ) {

        console.log("\n\n User-Agent: " + req.get("User-Agent") );
        next();
});
app.use('/static', serveIndex(__dirname + '/static' /* , {'icons': true}*/));
app.use('/static',express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.send('<body>Hello ' + process.env.NOMBRE_SALUDO + '</body>');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});