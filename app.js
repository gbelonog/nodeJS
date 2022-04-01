const { info, warn, error } = require('./utils/logger');
const { seek, eventEmitter } = require('./utils/FileSeeker');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

eventEmitter.on('success', (target,dirPath) => {
    info(`file ${target} is present in folder ${dirPath}`);
})
eventEmitter.on('fail', (target,dirPath) => {
    warn(`file ${target} is not present in folder ${dirPath}`);
})

seek(argv.file, argv.dir, argv.verbose);
