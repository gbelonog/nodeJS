const { info, warn, error } = require('./utils/logger');
const chalk= require('chalk');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')

const argv= yargs(hideBin(process.argv)).argv;
console.log("argv", argv.color);

console.log('hello, world)');
// info('green info message');
// warn('yellow warn message');
// error('red error message');

// console.log(process.env.mongo_uri);
// console.log(process.env.vasya);

// const color= 'green';

// console.log(chalk[color]('test'));
// console.log(process.argv);
let processing = true;
const interval = setInterval(()=>{
    if(processing){
        console.log("Searching...");
    }
   
}, 1000);

const timer = setTimeout(()=>{
    console.log("I've found it!!!");
    processing = false;
    clearInterval(interval);
}, 5000);

//clearTimeout(timer);
console.log(timer);

setImmediate(() => {
    console.log("setImmediate")
})

