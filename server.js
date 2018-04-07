var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

// Loading the page index.html
app.use('/', express.static(__dirname + '/static/'));




server.listen(5000);
console.log("Running Server... http://127.0.0.1:5000/");
