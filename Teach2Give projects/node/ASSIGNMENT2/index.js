const EventEmitter = require('events');
const LogEvents = require('./ LogEvents');

const emitter = new EventEmitter();

emitter.on('log', (message) => LogEvents(message));

setTimeout(() => {
  emitter.emit('log', 'New log event emitted');
  console.log("gLo");
}, 2000);
