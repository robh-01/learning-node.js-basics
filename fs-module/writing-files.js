import fs from "fs";
import fsp from "fs/promises";

const content = "Some content";

//async callback based
// fs.writeFile("./demo.txt", content, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File writing successful");
//   }
// });

//async promise based
// fsp
//   .writeFile("./demo.txt", content)
//   .then(() => {
//     console.log("File writing successful");
//   })
//   .catch((err) => {
//     console.log("File writing unsuccessful");
//   });

//synchronous
// try {
//   fs.writeFileSync("./demo.txt", content);
//   console.log("File writing successful");
// } catch (err) {
//   console.log("file writing unsuccessful");
// }

// By default, this API(fs(p).writeFile(Sync)) will replace the contents of the file if it does already exist.
// You can modify the default by specifying a flag like so:
// fs.writeFile("/Users/joe/test.txt", content, { flag: "a+" }, (err) => {});
//there are a LOT of flags like this for different use cases

// fs.writeFile("./demo.txt", content, { flag: "a+" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File writing successful");
//   }
// });

// Appending content to a file
// Appending to files is handy when you don't want to overwrite a file with new content, but rather add to it.

// A handy method to append content to the end of a file is fs.appendFile() (and its fs.appendFileSync() counterpart):

// fs.appendFile("./demo.txt", content, (err) => {
//   if (err) {
//     console.log("Appending to file unsuccessful");
//   } else {
//     console.log("Appending to file successful");
//   }
// });

//promise based
async function example() {
  try {
    const content = "Some content!";
    await fsp.appendFile("demo.txt", content);
    console.log("Appending to file successful");
  } catch (err) {
    console.log("Appending to file unsuccessful");
    console.log(err);
  }
}
example();
