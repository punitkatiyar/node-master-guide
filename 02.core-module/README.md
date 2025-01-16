# Node.js Basics

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
<hr>
