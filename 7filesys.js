var fs = require("fs");

//asynchronous read
//fs.readFile('input.txt', function (err, data) {
//   if (err) {
//      return console.error(err);
//   }
//   console.log("Asynchronous read: " + data.toString());
//});

//synchronous read
//var data = fs.readFileSync('input.txt');
//console.log("Synchronous read: " + data.toString());
//
//console.log("End of program");

console.log("first console log.");
fs.writeFile('input.txt', 'text to be the input', function(err) {
    if(err) {
        return console.error(err);
    }
    
    console.log("data written success.");
    console.log("writing new data..");
    
    fs.readFile('input.txt', function(err, data) {
        if(err) {
            return console.error(err);
        }
        
        console.log("Async read: " + data.toString());
    });
});