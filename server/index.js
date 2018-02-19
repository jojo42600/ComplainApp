var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo/index.js');

var app = express();



//view engine setup
//app.set('view engine', 'html');
//app.engine('html', function (path, options, callbacks){
//  fs.readFile(path, 'utf-8', callback);
//});


// middleware to connect to bundle.js
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//we do this so we can send our html stati files to the browser through the server



/// error handler //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

app.get('/item', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500 + 'cant find item');
    } else {
      res.json(data);
    }
  });
});

app.post('/complaint', function (req, res) {
  items.testInsert()
})



app.put('/', function (req, res) {
  res.send('Got a PUT request at /user')
})
app.delete('/', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(process.env.PORT || 5000, function () {
  console.log('listening on port 5000!');
});