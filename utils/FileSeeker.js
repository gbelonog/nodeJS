const { readdir, readFile } = require('fs');
const path = require('path');
const { info, error } = require('./logger');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const { writeToLog } = require('./loggerToFile');

async function seek(target = '', dirPath = '', verbose = false) { 
    await readdir(path.resolve(dirPath), (err, files)=>{
        if(err) {
            error(err);
        } else {
            info(`files: ${files} are in folder ${dirPath}`);
            if(files.indexOf(target) !== -1){
                eventEmitter.emit('success', target, dirPath);
                readFile(path.join(dirPath, target), 'utf8' , (err, data) => {
                    if (err) {
                      console.error(err);
                      return
                    }
                    console.log(data);
                    if(verbose) writeToLog('success', data);
                  })
                
            } else {
                eventEmitter.emit('fail', target, dirPath);
                if(verbose) writeToLog('fail');
            }
        }
    })
}

module.exports = { seek, eventEmitter };

