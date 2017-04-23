var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

//These are our routes... Each of these JS files contains one of our pages!
app.use(require('./routes/index'));
app.use(require('./routes/about'));


// Creating the server and listening on port the 
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});