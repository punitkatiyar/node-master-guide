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



