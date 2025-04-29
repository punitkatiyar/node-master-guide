const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("<h1>Hello Node</h1>");
})

server.listen(3000, () => {
    console.log("server is start http://localhost:3000")
})