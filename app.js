const { info, warn, error } = require('./utils/logger');
const { seek, eventEmitter } = require('./utils/FileSeeker');
//const { argv } = require('process');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log('hello, world)');
info('green info message');
warn('yellow warn message');
error('red error message');

eventEmitter.on('success', (target,dirPath) => {
    info(`file ${target} is present in folder ${dirPath}`);
})
eventEmitter.on('fail', (target,dirPath) => {
    warn(`file ${target} is not present in folder ${dirPath}`);
})

// seek('package-lock.json', __dirname);//success
// seek('package-lock.jsn', __dirname);//fail
//seek(argv._[0] , argv._[1] );//success
info('argv: ', argv);
seek(argv.file, argv.dir);//error
