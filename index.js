console.log("Node Message");

let fs = require('fs');
let http = require('http');
let url = require('url');
let os = require('os');
let path = require('path');

// console.log(fs);
// console.log(http);
// console.log(url);
// console.log(os);
// console.log(path);

// fs.open("sample.txt", (err) => {
//     if(err) 
//         console.log("No Such File Exist");
//     else
//         console.log("File is available and can be opened");
// });

// fs.writeFile("sample.txt", "Another Content added to this file!", (err) => {
//     if(err)
//         console.log("Can't create the file");
//     else
//         console.log("File has been created");
// });


// fs.writeFileSync("sample1.txt", "This is Sync File Creation", (err) => {
//     if(err)
//         console.log("Could not create my file");
//     else
//         console.log("File is created");
// });

// fs.appendFile("sample.txt", "\nNew Line Added!", (err) => {
//     if(err)
//         console.log("Can't create the file");
//     else
//         console.log("File has been created");
// });

// fs.readFile("sample.txt", 'UTF-8', (err, data) => {
//     if(err)
//         console.log("File can't be opened");
//     else
//         console.log(data);
// });

// fs.rename("sample.txt", 'newsample.txt', (err) => {
//     if(err)
//         console.log("File can't be renamed");
//     else
//         console.log("File has been renamed");
// });

// fs.unlink("newsample.txt", (err) => {
//     if(err)
//         console.log("File can't be deleted");
//     else
//         console.log("File has been deleted");
// });

function processFile() {
    let result = "";
    
    fs.writeFile("sample6.txt", "Another Content added to this file!", (err) => {
        if(err)
            console.log("Can't create the file");
        else {
            // setTimeout(() => {
            //     console.log("File has been created");    
            // }, 5000);
            console.log("File has been created");
        }
            
    });

    fs.readFile("sample5.txt", 'UTF-8', (err, data) => {
        if(err)
            console.log("File can't be opened");
        else
            // console.log(data);
            result = data;
    });

    setTimeout(() => {
        console.log(result, "Data");
    }, 1000);
    

    // await fs.appendFile("sample.txt", "\nNew Line Added!", (err) => {
    //     if(err)
    //         console.log("Can't be appended");
    //     else
    //         console.log("File has been appended");
    // });

    // fs.readFile("sample.txt", 'UTF-8', (err, data) => {
    //     if(err)
    //         console.log("File can't be opened");
    //     else
    //         console.log(data);
    // });
}
processFile();