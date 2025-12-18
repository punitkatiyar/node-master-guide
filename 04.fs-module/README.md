# Node fs Module

The fs module in Node.js provides an API for interacting with the file system. It allows you to work with files and directories, including reading, writing, updating, deleting, and managing permissions.



## 1. step

```
const fs = require('fs');
```
<hr>

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

<hr>

```
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
```



2️⃣ Write Data to a File
✔ Overwrite file (or create if not exists)
```
fs.writeFile("info.txt", "Hello World!", (err) => {
    if (err) console.log(err);
    else console.log("File written successfully!");
});
```
✔ Append (add new content)
```
fs.appendFile("info.txt", "\nNew line added!", (err) => {
    if (err) console.log(err);
});
```

📌 Use Case:
Saving user uploads, logs, reports, generated files.

3️⃣ Delete a File

```
fs.unlink("info.txt", (err) => {
    if (err) console.log(err);
    else console.log("File deleted.");
});
```


📌 Use Case:
Remove temp files, clear logs, cleanup tasks.

4️⃣ Create a Directory

```
fs.mkdir("uploads", { recursive: true }, (err) => {
    if (err) console.log(err);
    else console.log("Folder created.");
});
```

📌 Use Case:
Create folders for images, logs, backups, etc.

5️⃣ Read Contents of a Directory
```
fs.readdir("./", (err, files) => {
    if (err) console.log(err);
    else console.log(files); // array of files & folders
});
```

📌 Use Case:
Show list of uploaded images, batch process files, etc.

6️⃣ Remove a Directory
```
fs.rmdir("uploads", { recursive: true }, (err) => {
    if (err) console.log(err);
    else console.log("Folder removed.");
});
```

7️⃣ Using fs.promises (Modern & Clean)
```
const fs = require("fs").promises;

async function readFileExample() {
    try {
        const data = await fs.readFile("data.txt", "utf8");
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileExample();
```

📌 Use Case:
Best for large apps using async/await (Express.js, APIs, CLIs)







