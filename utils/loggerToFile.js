const { appendFile } = require('fs');

const date = new Date().toUTCString();

function writeToLog(...args){
    const logMessage = '\n' + date + '[ ' + args[0] +' ] '+ (args[1]||'');
    appendFile('events.log', logMessage, 'utf8', (err) => {
        if (err) throw err;
      }); 
}

module.exports = { writeToLog };