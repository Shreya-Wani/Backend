const EvenEmitter = require("events");

const eventEmitter = new EvenEmitter()

//this event can emit agai and again
eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} and welcome to events in node js`);
});

//second listner of greet function
eventEmitter.on('greet', (username) => {
    console.log(`Hey ${username} and welcome to listner2`);
});


//this event emit only once
eventEmitter.once('pushnotify', () => {
    console.log('this event will run only once');
})

// //Emit the event
eventEmitter.emit('greet' , 'shreya');
// eventEmitter.emit('greet' , 'shivam');
// eventEmitter.emit('pushnotify');
// eventEmitter.emit('pushnotify'); // this will not run because we have used once method.
// eventEmitter.emit('greet' , 'billu');

// const myListener = () => console.log('I am a test listner')
// eventEmitter.on('test', myListener);
// eventEmitter.emit('test');
// eventEmitter.emit('test');
// eventEmitter.removeListener('test', myListener);
// eventEmitter.emit('test'); // this will not run because we have removed the listener.

// console.log(eventEmitter.listeners("greet"));
