<img src="./node.png" bgcolor="teal">

# 🥇 Node Js Master Guide  

**Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that allows developers to build scalable, high-performance applications. It was created in 2009 by Ryan Dahl and has since become a popular platform for building server-side applications and network applications.**

**Node.js is built on the V8 JavaScript engine, the same engine used by the Google Chrome browser. It uses an event-driven, non-blocking I/O model, which makes it efficient and lightweight. This allows developers to build applications that can handle a large number of concurrent connections with minimal overhead.**

<hr>

<a href="https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi">📦 Download Node</a>

<hr>

## Node Basic Setup and test

- **Install Node.js: Go to the official Node.js website at https://nodejs.org and download the appropriate version for your operating system. Follow the installation instructions to install Node.js.**

> JavaScript And ES5 and ES6

> TypeScript

> Runtime Enviroment

> NPM And Yarn

> File Handling

> Database

> API

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
