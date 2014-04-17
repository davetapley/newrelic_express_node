var newRelic = require('newrelic');

var express = require('express');
var app = express();

app.get('/okay', function(req, res){
  res.end('Hello World');
});

app.get('/500', function(req, res){
  res.send(500);
  res.end();
});

app.get('/throw', function(req, res){
  throw new Error('throw an error!');
});

app.get('/nested/okay', function(req, res){
  res.end('Hello nested');
});

app.get('/slow', function(req, res){
  setTimeout(function() {
    res.end('So slow');
  }, 2000);
});

app.get('/nested/slow', function(req, res){
  setTimeout(function() {
    res.end('So slow');
  }, 10000);
});

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
