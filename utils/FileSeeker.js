const { readdir } = require('fs');
const path = require('path');
const { info, warn, error } = require('./logger');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


async function seek(target = '', dirPath = '') { 
    await readdir(path.resolve(dirPath), (err, files)=>{
        if(err) {
            error(err);
        } else {
            info(`files: ${files} are in folder ${dirPath}`);
            if(files.indexOf(target) !== -1){
                eventEmitter.emit('success', target, dirPath);
            } else {
                eventEmitter.emit('fail', target, dirPath);
            }
        }
    })


}

module.exports = { seek, eventEmitter };

