const chalk = require("chalk");
const COLORS = ["green", "yellow", "red"];

function info(message){
    console.log(chalk[COLORS[0]](message));
}

function warn(message){
    console.log(chalk[COLORS[1]](message));
}

function error(message){
    console.log(chalk[COLORS[2]](message));
}

module.exports = { info, warn, error };