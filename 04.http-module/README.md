# http module

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
