<!-- # Node.js Basics

- Installing Node.js and Using Node REPL
- Running JavaScript Files with node
- The Node.js Event Loop
- Global Objects (__dirname, __filename, process)
- Understanding require() and ES Modules

## file system  fs module

```
const fs = require("fs");

// console.log(fs);

// fs.writeFileSync('./test.txt',"Welcome to node file");
// fs.writeFileSync('./test.txt',"Welcome Ducat India");


// Async
fs.writeFile('./test.txt', "Welcome", () => { });
```
<hr> -->


# What is a Node Module ?

A Node module is a reusable block of code that can be included in a Node.js application. These modules allow developers to organize their code into smaller, more manageable parts and share functionality across different parts of an application or even across different projects. Node modules can include built-in modules provided by Node.js, third-party modules installed via npm (Node Package Manager), or custom modules that you create.


