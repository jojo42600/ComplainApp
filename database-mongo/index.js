var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itemdb')



var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  complaint: String,
  age: Number
 // date: {type: Date, default: Date.now}//
});

var item = module.exports = mongoose.model('item', itemSchema);


 //let save = ( ) => {}
//New ITEM ({name: , complaint: ,age: }).save()



var testInsert = function(NAME,COMPLAINT,AGE){
  db.item.insert({
    name: NAME || "tester face",
    complaint: COMPLAINT || "testy complaint",
    age: AGE || 999
  })
  console.log(NAME + COMPLAINT + AGE + 'added to' + db.item)
}





var selectAll = function(callback) {
  item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};


module.exports.selectAll = selectAll;
module.exports.testInsert = testInsert

