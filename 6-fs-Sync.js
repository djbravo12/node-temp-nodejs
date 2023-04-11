const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync('./modules/text.txt', 'utf8')
const second = readFileSync('./modules/text2.txt', 'utf8')

// console.log(first);

writeFileSync('./modules/wews.txt', `${first} and ${second} `, { flag: 'a+' })