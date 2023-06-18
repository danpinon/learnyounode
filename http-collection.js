const http = require('http');

const url = process.argv[2];

http.get(url, (res, req) => {
  res.setEncoding('utf8');
  let str = '';
  res.on('data', (data) => {
    str += data
  })
  res.on('error', error => console.error(error))
  res.on('end', () => {
    console.log(str.length)
    console.log(str)
  })
})