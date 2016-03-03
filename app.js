var express = require('express');
var path = require('path');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'express',
  user     : 'root',
  password : ''
});
connection.connect();

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*app.get('/', function (req, res) {
  res.send('Hello express');
});*/

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hello express',
    test: connection.query('SELECT * FROM users'),
    items: [
      { id:1, desc: 'ololo'},
      { id:2, desc: 'atata'},
      { id:3, desc: 'omnomnomn'}
    ]
  });
});

app.get('/hello', function (req, res) {
  res.render('index', {
    title: 'Hello express',
    test: connection.query('SELECT * FROM users'),
    items: [
      { id:1, desc: 'ololo'},
      { id:2, desc: 'atata'},
      { id:3, desc: 'omnomnomn'}
    ]
  });
});

app.listen(8080, function () {
  console.log('ready');
});