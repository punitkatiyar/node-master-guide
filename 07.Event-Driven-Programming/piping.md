# Piping Streams ( Efficient Data Transfer )

Streams can be piped to pass data from one stream to another without storing it in memory.

## Example: Copying a File Using Streams & Pipe

```
const fs = require('fs');

// Create readable and writable streams
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

// Pipe the readable stream into the writable stream
readStream.pipe(writeStream);

console.log('File copied successfully.');
```
