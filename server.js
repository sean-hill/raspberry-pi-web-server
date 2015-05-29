var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.send('Hello Raspbian!');
});

app.listen(app.get('port'), function() {
	console.log('Web app running on port', app.get('port'));
});