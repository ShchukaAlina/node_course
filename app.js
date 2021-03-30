const http = require('http');
const routers = require('./routes');

const server = http.createServer((req, res) => {
    routers(req, res)
})

server.listen(3000);