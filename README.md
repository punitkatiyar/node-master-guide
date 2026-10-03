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

