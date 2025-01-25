# Node fs Module

The fs module in Node.js provides an API for interacting with the file system. It allows you to work with files and directories, including reading, writing, updating, deleting, and managing permissions.



## 1. step

```
const fs = require('fs');
```

### 1. Reading Files

#### Asynchronous:

```
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

#### Synchronous:

```
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```







