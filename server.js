var express = require('express');
var morgan = require('morgan');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(morgan(':date[web] - :method :url responded :status in :response-time ms' + (process.env.NODE_ENV === 'production' ? ' - :remote-addr :referrer - :user-agent' : ''), { 
    immediate: false 
}));

app.get('/', function(req, res) {
	res.send('Hello Raspbian!');
});

app.listen(app.get('port'), function() {
	console.log('Web app running on port', app.get('port'));
});