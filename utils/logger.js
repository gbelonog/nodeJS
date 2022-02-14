const chalk = require("chalk");
const COLORS = ["green", "yellow", "red"];

function info(...args){
    console.log(chalk.green(...args));
}

function warn(...args){
    console.log(chalk.yellow(...args));
}

function error(...args){
    console.log(chalk.red(...args));
}

module.exports = { info, warn, error };