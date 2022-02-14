const { add, addAndMult } = require('./lib/add');
const { diff, anotherDiff } = require('./lib/diff');
require ('./lib/mult');
require('./lib/patch');

console.log('hello, world)');
console.log('add 2+3 = ', add(2,3));
console.log('addAndMult 2*3 = ', addAndMult(2,3));

console.log('diff 2-3 = ', diff(2,3));
console.log('anotherDiff 2-3 = ', diff(2,3));
console.log('mult 2*3 = ', mult(2,3));