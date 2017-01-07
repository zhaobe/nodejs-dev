var fs = require("fs");
var data = '';

//create readable stream
var readStream = fs.createReadStream('input.txt');

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

console.log("End of reading stream.");

//data to write
var writeData = 'data for writing';

//write stream event handlers, finish and error
var writeStream = fs.createWriteStream('output-6stream.txt');
writeStream.write(writeData, 'UTF8');
writeStream.end();

writeStream.on('finish', function() {
    console.log("write completed");
});

writeStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("End of program.");

//piping streams

//chaining streams