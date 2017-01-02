//blocking example - prog blocks until it reads file.
//var fs = require("fs");
//
//var data = fs.readFileSync('callback.txt');
//
//console.log(data.toString());
//console.log("Program Ended.");

//non-blocking example - prog doesn't wait to read file.
var fs = require("fs");

fs.readFile('callback.txt', function(err, data) {
    if(err) {
        return console.error(err);
    }
    console.log(data.toString());
});

console.log("Program Ended.");