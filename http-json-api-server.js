const http = require('http');
const url = require('url');
console.log(process.argv)
const port = process.argv[2];

const parseTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return { hour, minute, second };
}

const parseUnixTime = (date) => {
  return { unixtime: new Date(date).getTime() };
}

const parseUrl = (url) => {
  if (url.pathname === '/api/parsetime') {
    return parseTime(new Date(url.query.iso));
  }
  if (url.pathname === '/api/unixtime') {
    return parseUnixTime(url.query.iso);
  }
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const URL = url.parse(req.url, true)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(parseUrl(URL)));
  } else {
    response.writeHead(405);
    response.end();
  }
})

server.listen(port);