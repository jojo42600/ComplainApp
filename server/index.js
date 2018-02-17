var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

//view engine setup
app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback);
});


// middleware to connect to bundle.js
app.use(express.static(__dirname + '/../react-client/dist'));
//we do this so we can send our html stati files to the browser through the server

//app.get('/', function (res, req){
//  res.sendFile(path.join(__dirname, '../react-client/dist', 'index.html'))
//})

/// error handler //
app.use(function (err, req, res, next){
  res.status(err.status || 500);
});

/*app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
*/
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.listen(process.env.PORT || 5000, function() {
  console.log('listening on port 5000!');
});






