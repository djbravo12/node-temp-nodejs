const path = require("path");

const filePath1 = path.join("./modules", "text.txt");
const resolve = path.resolve(__dirname, filePath1);

// console.log(filePath);

const base = path.basename(filePath1);

console.log(base);
console.log(resolve);

