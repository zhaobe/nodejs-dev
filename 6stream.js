var fs = require("fs");
var data = '';

//create readable stream
var readStream = fs.createReadStream('streams.txt');

//set encoding
readStream.setEncoding('UTF8');

//stream event handlers
//data, end and error
readStream.on('data', function(chunk) {
    data += chunk;
});

readStream.on('end', function() {
    console.log(data);
});

readStream.on('error', function() {
    console.log(err.stack);
});

console.log("End of Program.");