const fs = require('fs');
const path = require('path');

const pathToFiles = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(pathToFiles, (err, list) => {
  if (err) return console.error(err);
  
  list.filter(file => {
    if (path.extname(file) === extension) {
      console.log(file)
    }
  })
})