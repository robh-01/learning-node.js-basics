import fs from "fs";
import fsp from "fs/promises";

//try one approach at one time, commenting other two.

//async callback based
// fs.readFile("./demo.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("File reading unsuccessful");
//     console.log(err);
//   } else {
//     console.log("Data: ", data);
//   }
// });

//async promise based
//remember async await are used to write asynchronous code in a synchronous looking manner
//the code below can also be written in pure .then.catch way too
// async function readingFile() {
//   try {
//     const data = await fsp.readFile("./demo.txt", "utf-8");
// console.log("File reading successful");
// console.log("Data: ", data);
//   } catch (err) {
//     console.log("File reading unsuccessful");
//     console.log(err);
//   }
// }
// readingFile();

//synchronous approach
// try {
//   const data = fs.readFileSync("./demo.txt", "utf-8");
//   console.log("File reading successful");
//   console.log("Data: ", data);
// } catch (err) {
//   console.log("File reading unsuccessful");
//   console.log(err);
// }

// All three of fs.readFile(), fs.readFileSync() and fsPromises.readFile() read the full content of the file in memory before returning the data.
// This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.
// In this case, a better option is to read the file content using streams.


//study how the await const chunk of readstream part is working
async function readFile(filePath) {
  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });
  try {
    for await (const chunk of readStream) {
      console.log("--- File chunk start ---");
      console.log(chunk);
      console.log("--- File chunk end ---");
    }
    console.log("Finished reading the file.");
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}
readFile("./demo.txt");
