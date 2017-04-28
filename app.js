var express = require('express');
var app = express();
const pug = require('pug');

// 'view engine' is an Express.js system variable. So here we are setting the value of that system variable to 'pug' so we can use pug in our routes. 
app.set('view engine', 'pug')
// 'port' is an Express.js system variable
app.set('port', process.env.PORT || 3000);

//These are our routes... Each of these JS files contains one of our pages!
app.use(require('./routes/index'));
app.use(require('./routes/about'));


// Creating the server and listening on port specified by the windows 'port' envitonment variable
// 'set port=443'
// 'node app.js'
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});