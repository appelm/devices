var express = require('express');
var app = express();
const pug = require('pug');
var MongoClient = require('mongodb').MongoClient

app.set('view engine', 'pug')
app.set('port', process.env.PORT || 3000);

//These are our routes... Each of these JS files contains one of our pages!
app.use(require('./routes/index'));
app.use(require('./routes/about'));



// Setup MongoDB connection?... May have to make the Database manually using some MongoDB application.
//MongoClient.connect('mongodb://localhost:27017/app', function (err, db) {
  //if (err) throw err
//
  //db.collection('mammals').find().toArray(function (err, result) {
    //if (err) throw err
//
  //  console.log(result)
//  })
//});

// Creating the server and listening on port the
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
