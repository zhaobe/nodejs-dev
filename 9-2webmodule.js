var http = require('http');

//options used by request later in code
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'
};

//callback function for response later in code
var callback = function(response) {
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    
    response.on('end', function() {
        console.log(body);
    });
}

var req = http.request(options, callback);
req.end();