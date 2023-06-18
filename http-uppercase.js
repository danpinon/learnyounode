const http = require('http');

const port = process.argv[2];

const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, next) {
    this.push(chunk.toString().toUpperCase()); //pushes the chunk of the req into the res object
    next();
  }
});

const server = http.createServer((req, res) => {
  // req.on('data', chunck => res.write(chunck.toString().toUpperCase()))
  // req.on('end', () => res.end())
  req.pipe(upperCaseTr).pipe(res)
});

server.listen(port)