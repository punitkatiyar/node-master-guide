const fs = require("fs");

// Registation

// fs.writeFile("info.txt", "Hello File 123", (err) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log("File create");
//     }
// })

// fs.appendFile("info.txt", "\nNew Line", (err) => {
//     if (err) {
//         console.error(err)
//     }
// })

// fs.unlink("info.txt", (err) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log("File Delete");
//     }
// })

// fs.mkdir("download", { recursive: true }, (err) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log("Folder Created");
//     }
// })

fs.readdir("./download", (err, files) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log(files)
    }
})






// fs.rmdir("download", { recursive: true }, (err) => {
//     if (err) {
//         console.error(err)
//     }
//     else {
//         console.log("Folder Deleted");
//     }
// })
