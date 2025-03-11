# What are Streams?

Streams are a way to handle data efficiently in chunks, instead of loading entire files into memory. Node.js provides four types of streams:

- Readable Streams → Read data in chunks (e.g., file reading)
  
- Writable Streams → Write data in chunks (e.g., file writing)

- Duplex Streams → Both read & write (e.g., sockets)

- Transform Streams → Modify data while streaming (e.g., compression)
