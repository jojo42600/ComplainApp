var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));
//we do this so we can send our html stati files to the browser through the server

//app.get('/get/all', (request, response) =>)

//}
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



app.listen(process.env.port ||3000, function() {
  console.log('listening on port 3000!');
});






