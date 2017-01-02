//event driven programming
//event handling is just like the observer pattern
var events = require('events');

var eventEmitter = new events.EventEmitter(); //create eventEmitter obj

//create event handler and fire the data_received event
var eventHandler = function connected() {
    console.log('connection was successful.');
    eventEmitter.emit('data_received');
}

//bind connection event with the handler
eventEmitter.on('connection', eventHandler);

//bind data_received event with anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received successfully.');
});

//emit connection event
eventEmitter.emit('connection');

console.log("Program Ended.");