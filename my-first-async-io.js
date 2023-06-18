const fs = require('fs');
let lines = 0;

fs.readFile(process.argv[2], (err, buffer) => {
  const content = buffer.toString();
  lines = content.split('\n').length - 1;
  console.log(lines)
});
