var express = require('express');
var app = express();

//GET request
app.get('/', function(req, res) {
    console.log("This is the GET request for the home page");
    res.send('Hello GET');
})

//POST request
app.post('/', function(req, res) {
    console.log("This is the POST request for the home page");
    res.send('Hello POST');
})

//DELETE request
app.delete('/del_user', function(req, res) {
    console.log("This is the DELETE request for the home page");
    res.send('Hello DELETE');
})

//GET for list_user
app.get('/list_user', function(req, res) {
    console.log("This is the GET request for /list_user");
    res.send('List Users Page');
})

//Pattern Matching for GET
app.get('/ab*cd', function(req, res) {
    console.log("This ithe GET request for Pattern Matching /ab*cd");
    res.send('Pattern Matching Page');
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port);
    console.log("Go to: http://127.0.0.1:8081");
})