# http module

## create a server

```
const http=require('http');
const server=http.createServer((req,res)=>{
     // res.writeHead(200);
     res.writeHead(200,{"Content-Type":"text/plain"});
     res.end("hello worlds !!");    
});
server.listen(3000,()=>{
    console.log("Server is running");
})
```

## http with json data
```
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const techs={
        t1:"html",
        t2:"css",
        t3:"js"
    }
     res.writeHead(200,{"Content-Type":"application/json"});
     res.end(JSON.stringify(techs));    
});
```

## http with html 

```
const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>hello worlds !!</h1>");
});
```

## http with html file

```
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{ 
    res.writeHead(200,{"Content-Type":"text/html"});
    const html=fs.readFileSync('./index.html',"utf-8");
    res.end(html);
});
```

## http pass the data to html file

```
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const name="Ducat India";
    res.writeHead(200,{"Content-Type":"text/html"});
    let  html=fs.readFileSync('./index.html',"utf-8");
    html=html.replace("{{name}}",name)
    res.end(html);
});
```









<!--


## Synchronous Example

```
const http = require('http');

// A synchronous request handler
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const data = fs.readFileSync('example.txt', 'utf8'); // Blocking
    res.end(data); // Respond with file content
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
```
<hr>

- **Problem:** If one request takes a long time (e.g., reading a large file), all other requests are delayed.

<hr>

## Asynchronous Example:

```
const http = require('http');
const fs = require('fs');

// An asynchronous request handler
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('example.txt', 'utf8', (err, data) => { // Non-blocking
      if (err) {
        res.statusCode = 500;
        return res.end('Error reading file');
      }
      res.end(data); // Respond with file content
    });
  }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
```

<hr>

- Advantage: The server can handle other requests while waiting for the file to be read.

<hr>







```
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

-->
