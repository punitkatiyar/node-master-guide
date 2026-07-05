# Node http with routing

```
const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/plain");

    if (req.url === '/' && req.method === "GET") {
        res.end("Home Page")
    }
    else if (req.url === "/page" && req.method === "GET") {
        res.end("Page Demo")
    }
    else {
        res.statusCode = 404
        res.end("Page Not Found")
    }
})

server.listen(port, () => {
    console.log(`server Start http://localhost:${port}`)
})

```
