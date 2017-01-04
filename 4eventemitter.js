var events = require('events');

//create eventEmitter object
var eventEmitter = new events.EventEmitter();

//listener1
var listen1 = function listen1() {
   console.log('listen1 executed.');
}

//listener2
var listen2 = function listen2() {
  console.log('listen2 executed.');
}

//bind connection event with listener1
eventEmitter.addListener('connection', listen1);

//bind connection event with listener2
eventEmitter.on('connection', listen2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//emit connection event
eventEmitter.emit('connection');

//remove binding of listener1
eventEmitter.removeListener('connection', listen1);
console.log("listen1 will not listen now.");

//emit connection event again 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program Ended.");