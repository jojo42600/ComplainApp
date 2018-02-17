var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

app.set('port'), (process.env.PORT || 5000 )

app.use(express.static(__dirname + '/../react-client/dist'));
//we do this so we can send our html stati files to the browser through the server


app.get('/', function(req,res){
  res.send("Welome to Joe's app under Construction")
});

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



app.listen(app.get('port'), function() {
  console.log('listening on port:', app.get('port'));
});






