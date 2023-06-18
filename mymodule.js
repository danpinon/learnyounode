const fs = require('fs');
const path = require('path');

module.exports = function filterFiles(pathToFiles, ext, cb) {
  const extension = '.' + ext;
  
  fs.readdir(pathToFiles, (err, list) => {
    if (err) return cb(err);
    
    list = list.filter(file => {
      return path.extname(file) === extension
    })
    cb(null, list)
  })
}