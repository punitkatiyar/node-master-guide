//  node fs
const fs = require("fs");

// let data = fs.readFileSync("data.txt", 'utf-8')
// console.log(data);
// console.log("File read Complete");


try {
    const data = fs.readFileSync("data.txt", 'utf-8');
    console.log("File Content is :", data)
}
catch (err) {
    console.error("Error is", err);
}






// fs.readFile("data.txtt", 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error Reading File', err)
//         return;
//     }
//     console.log(data)
// })

// console.log("File Read Start");




