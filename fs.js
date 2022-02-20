const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(__dirname + '/packeage.json');
console.log(path.join(__dirname , '/packeage.json'));

const result = fs.readdirSync(__dirname);

console.log(result);
fs.readdir(__dirname, (err, data) => {
    if(err)process.exit(1);
    console.log(data);
})