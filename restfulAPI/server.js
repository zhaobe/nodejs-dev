var express = require('express');
var app = express();
var fs = require('fs');

var user = {
    "user4" : {
        "name" : "daniel",
        "password" : "password4",
        "profession" : "teacher",
        "id" : 4
    }
}

app.get('/listUsers', function(req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

app.post('/addUser', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port);
    console.log("To list users : http://127.0.0.1:8081/listUsers");
    console.log("To add user   : enter this in postman http://127.0.0.1:8081/addUser");
})