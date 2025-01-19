# Node Global Object

 **The global object provides variables and functions available throughout the application without importing them.**

 ## 1. global

The global object is the root object in Node.js, similar to window in browsers. All global variables can be accessed through global.

```
global.myVar = "Hello, world!";
console.log(global.myVar); // Output: Hello, world!
```

## 2. __dirname

It gives the absolute path of the directory containing the currently executing script.

```
console.log(__dirname); // Output: Absolute directory path
```

## 3. __filename

It provides the absolute path of the currently executing script, including the filename.

```
console.log(__filename); // Output: Absolute file path
```

## 4. process

The process object provides information about and control over the current Node.js process.

```
console.log(process.version); // Output: Node.js version
console.log(process.platform); // Output: Platform (e.g., 'win32', 'darwin', 'linux')
```

## 5. console

Provides a simple way to output messages to the console, similar to console in browsers.

```
console.log("Hello, Node.js!"); // Output: Hello, Node.js!
console.error("An error occurred!"); // Output: Error message
```

## 6. setTimeout and clearTimeout

Used to execute a function after a delay.

```
const timer = setTimeout(() => {
  console.log("This runs after 2 seconds.");
}, 2000);

clearTimeout(timer); // Cancels the timeout
```

## 7. setInterval and clearInterval

Used to execute a function repeatedly at a specified interval.

```
const interval = setInterval(() => {
  console.log("This runs every 1 second.");
}, 1000);

setTimeout(() => clearInterval(interval), 5000); // Stops after 5 seconds
```

##   8. setImmediate and clearImmediate

Executes a function immediately after the current event loop finishes.

```
const immediate = setImmediate(() => {
  console.log("Executed immediately after the current event loop.");
});

clearImmediate(immediate); // Cancels the immediate execution
```

## 9. require

Used to import modules in Node.js.

```
const fs = require("fs"); // File System module
fs.writeFileSync("example.txt", "Hello, Node.js!");
```

## 10. module

Provides information about the current module, such as exports

```
console.log(module.exports); // Output: The exports of the current module
```

## 11. exports

A shorthand for module.exports, used to export functionality from a module.

```
exports.greet = () => {
  console.log("Hello from exports!");
};
```













