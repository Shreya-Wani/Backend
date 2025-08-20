const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('error', (err) => {
    console.log(`Error occured: ${err.message}`);
})

eventEmitter.emit('error', new Error('Something went wrong'));