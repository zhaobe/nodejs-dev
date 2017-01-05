//simple buffer examples

//convert buffer to JSON
var buf = new Buffer('Simple');
var json = buf.toJSON(buf);
console.log(json);

//concatenate buffers
var buffer1 = new Buffer('first half ');
var buffer2 = new Buffer('second half');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("output: " + buffer3.toString());
