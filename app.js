var express     = require('express');
var app         = express();
var bodyParser  = require("body-parser");
const pug       = require('pug');
var MongoClient = require('mongodb').MongoClient

app.set('view engine', 'pug')
app.set('port', process.env.PORT || 3000);
app.set('')

//These are our routes... Each of these JS files contains one of our pages!
app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/button'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static('public'));

// Setup MongoDB connection
/*MongoClient.connect('mongodb://localhost:27017/app', function (err, db) {
  if (err) throw err

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
});
*/

// Creating the server and listening on port the
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});
