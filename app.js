
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;   // format source code
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/riddle1', routes.riddle1);
app.post('/riddle1', routes.riddle1);

app.get('/riddle2', routes.riddle2);
app.post('/riddle2', routes.riddle2);

app.get('/riddle3', routes.riddle3);
app.post('/riddle3', routes.riddle3);

app.get('/ziggy', routes.riddle4);
app.post('/ziggy', routes.riddle4);

app.get('/HID', routes.hid);
app.post('/HID', routes.hid);

app.get('/charades', routes.riddle6);
app.post('/charades', routes.riddle6);

app.get('/1984', routes.riddle7);
app.post('/1984', routes.riddle7);

app.get('/eight', routes.riddle8);
app.post('/eight', routes.riddle8);

app.get('/location', routes.riddle9);
app.post('/location', routes.riddle9);

app.get('/l4s7', routes.riddle10);
app.post('/l4s7', routes.riddle10);

app.get('/ultimate', routes.end);
app.post('/ultimate', routes.end);

app.get('/theanswer', routes.theanswer); // rickroll

// app.get('/riddle5', routes.riddle5);
// app.post('/riddle5', routes.riddle5);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
