const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2]);
const content = buffer.toString();
const lines = content.split('\n').length - 1;
console.log(lines)
