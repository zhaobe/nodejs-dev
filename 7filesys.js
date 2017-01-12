var fs = require("fs");

/***
//asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

//synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("End of program");
***/

//writing to file example
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

//other  file sys methods:
//get file info - methods return boolean
//reading a file - fs.read(fd, buffer, offset, length, position, callback)
//closing a file - fs.close(fd, callback)
//truncate a file - fs.truncate(fd, length, callback)
//delete a file - fs.unlink(path, callback)

//create a directory - fs.mkdir(path[, mode], callback)
//read a directory - fs.readdir(path, callback)
//remove a directory - fs.rmdir(path, callback)
