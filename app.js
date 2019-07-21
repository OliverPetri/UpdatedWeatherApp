var express = require('express');
var path = require('path');
const cors = require('cors');


var app = express();

app.use(cors({
	origin: 'http://localhost:3500'
}));

app.use(express.static(path.join(__dirname, '../src')));

const routes = require('./routes')(app);

app.use('/*', (req, res, next) => {
	res.sendFile(express.static(path.join(__dirname, '../src/index.html')));
})



app.listen(8000, () => {
	console.log(`Server listening on port 8000`);
})

module.exports = app;
