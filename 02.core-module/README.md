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

## Types of Node Modules:

### 1.local Modules:

These are modules you create in your project to organize your code.

### 2.Built-in Modules:
These are built into Node.js and do not require installation. Examples include:

- fs (File System) for file operations
- http for creating servers
- path for handling file paths

### 3.Third-party Modules:
These are modules developed by the community and shared via npm. Examples include:

- express (for building web applications)
- lodash (for utility functions)
- mongoose (for interacting with MongoDB)




