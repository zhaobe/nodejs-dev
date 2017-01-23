var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.get('/index_post.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index_post.html");
})

app.post('/process_post', urlEncodedParser, function (req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://%s:%s", host, port);
    console.log("Go to: http://127.0.0.1:8081/index_post.html");
})