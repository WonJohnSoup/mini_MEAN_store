var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, './client')));


require('./server/config/mongoose.js');
require('./client/config/routes.js')(app);


app.listen(8080, function() {
	console.log('Firing on: 8080');
});