const net = require('net');

const port = Number(process.argv[2]);

const zeroFill = (n) => {
  return (n < 10 ? '0' : '') + n
}
const now = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hour = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${minutes}`;
}

const server = net.createServer((socket) => {
  socket.end(now() +'\n')
});

server.listen(port);

