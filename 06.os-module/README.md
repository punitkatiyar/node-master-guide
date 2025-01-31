# os module
```
const os = require('os');

console.log("Operating System Information:");
console.log("------------------------------");
console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory (MB):", os.totalmem() / (1024 * 1024));
console.log("Free Memory (MB):", os.freemem() / (1024 * 1024));
console.log("System Uptime (minutes):", os.uptime() / 60);
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
```
