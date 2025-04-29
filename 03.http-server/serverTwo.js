const http = require('http');

const server = http.createServer((req, res) => {
    const techs = {
        t1: "html",
        t2: "css",
        t3: "js"
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(techs));
});



server.listen(3000, () => {
    console.log("server is start http://localhost:3000")
})