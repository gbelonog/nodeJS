const EventEmitter = require('events')
const myEventEmitter = new EventEmitter();

const cb = payload => {
    console.log('first event lestener:', payload);
   // payload.name = 'Bob';
    payload= {surname: "doe"};
    myEventEmitter.removeListener('data', cb);
};

myEventEmitter.addListener('data', 
)

myEventEmitter.addListener('data', payload => {
    console.log('second event lestener:', payload);
})
myEventEmitter.on('data', payload =>{
    console.log("third event listener", payload);
})
myEventEmitter.emit('data',  {name: 'John'});

module.exports= myEventEmitter;