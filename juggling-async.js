const http = require('http');
const fs = require('fs');

const urls = process.argv.slice(2, process.argv.length);

urls.forEach(url => {
  http.get(url, (res, req) => {
    res.setEncoding('utf8');
    let str = '';
    res.on('data', data => { 
      str += data
    })
    res.on('error', console.error)
    res.on('end', () => {
      console.log(str)
    })
  })
})