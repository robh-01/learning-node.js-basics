import fs from "fs/promises";
import path from "path";

// by default methods in fs are asynchronous(callback based), to make them synchronous add Sync at the end of the method name
// to use promise based methods, import fs from fs/promises. code must be accordance with promise system

//create folder
fs.mkdir(path.join(import.meta.dirname, "/test"), {})
  .then(() => {
    console.log("Folder created");
  })
  .catch((err) => {
    console.log("Folder creation unsuccessful");
  });

// create and write to a file
// fs.writeFile(
//   path.join(import.meta.dirname, "test", "hello.txt"),
//   "Hello, my name is John Doe."
// )
//   .then(() => {
//     console.log("file writing successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// add to the file without erasing its content (writing the code below as a follow up on above code so while running comment the one which you don't want to run)
// fs.writeFile(
//   path.join(import.meta.dirname, "test", "hello.txt"),
//   "Hello, my name is John Doe."
// )
//   .then(() => {
//     console.log("file writing successful");
//     return fs.appendFile(
//       path.join(import.meta.dirname, "test", "hello.txt"),
//       " I love Node.JS"
//     );
//   })
//   .then(() => {
//     console.log("File appending successful");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// read file
// going to do this with async/await approach but don't have to be, above approach would also be fine
// async function readFile() {
//   try {
//     const data = await fs.readFile(
//       path.join(import.meta.dirname, "test", "hello.txt"),
//       "utf-8"
//     );
//     console.log(data);
//   } catch (err) {
//     console.log("File reading unsuccessful.");
//     console.log(err);
//   }
// }
// readFile();

//rename file
//added some complexity for fun
// async function renameFile(filepath, newName) {
//   try {
//     await fs.rename(filepath, path.join(path.dirname(filepath), newName));
//     console.log("File renaming successful");
//   } catch (err) {
//     console.log("file renaming unsuccessful");
//     console.log(err);
//   }
// }

// renameFile(
//   path.join(import.meta.dirname, "test", "hello.txt"),
//   "renamedHello.txt"
// );
