var app = require('express').createServer();

// routing
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
//app.use(express.static(__dirname + '/static'));

app.listen(8080);