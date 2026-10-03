# 🥇 Node Js Master Guide  

**Node.js is a JavaScript runtime environment that allows developers to execute JavaScript code outside a web browser. Traditionally, JavaScript was mainly executed inside browsers. Node.js enables JavaScript to run on servers, command-line applications, scripts, APIs, and other environments.**

> Node.js = JavaScript + V8 Engine + Node.js APIs + Event-driven runtime

## JavaScript Environment & Execution
```
       JavaScript Runtime
              │
       ┌──────┴──────┐
       │             │
   JS Engine     Web APIs
       │             │
   Call Stack    DOM / Timer
       │          Fetch
       └──────┬──────┘
              │
          Event Loop
              │
        Callback Queue
```
## 1. Prerequisites
  
Before diving into Node.js, ensure you have a basic understanding of the following:

- Functions (Declaration, Arrow Functions, Callback Functions)
- Promises and Async/Await
- ES6+ Features (Destructuring, Spread/Rest, Template Literals)
- Modules (import/export)
- Basic Knowledge of Backend Development
- HTTP Protocol (Methods like GET, POST, PUT, DELETE)
- RESTful APIs
- JSON format
- Basic CLI (Command Line Interface) usage

## Node Architecture

```
             Node.js Application
                     |
              JavaScript Code
                     |
                  V8 Engine
                     |
              Node.js Runtime
                     |
        +------------+------------+
        |                         |
   Event Loop              Node APIs
        |                         |
        +------------+------------+
                     |
                OS / Network
                     |
              File / DB / HTTP
```

## NPM Solution

> Set-ExecutionPolicy RemoteSigned

> Set-ExecutionPolicy Unrestricted










> Set-ExecutionPolicy -Scope CurrentUser RemoteSigned -Force

