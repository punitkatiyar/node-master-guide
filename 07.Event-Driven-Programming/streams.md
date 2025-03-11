# What are Streams?

Streams are a way to handle data efficiently in chunks, instead of loading entire files into memory. Node.js provides four types of streams:

- Readable Streams → Read data in chunks (e.g., file reading)
  
- Writable Streams → Write data in chunks (e.g., file writing)

- Duplex Streams → Both read & write (e.g., sockets)

- Transform Streams → Modify data while streaming (e.g., compression)

```
const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('example.txt', 'utf8');

// Listen for data events
readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

// Handle errors
readableStream.on('error', (err) => {
    console.error('Error:', err);
});

```
