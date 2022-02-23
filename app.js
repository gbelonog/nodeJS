const { info, warn, error } = require('./utils/logger');
const { seek, eventEmitter } = require('./utils/FileSeeker');
const { argv } = require('process');

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

seek('package-lock.json', __dirname);//success
seek('package-lock.jsn', __dirname);//fail
argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
seek(argv[2], argv[3]);//success
seek(argv[2], argv[1]);//error
