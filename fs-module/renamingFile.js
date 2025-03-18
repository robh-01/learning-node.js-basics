import fs from "fs";

//generally the import is named fs only but as we already have one fs lets make it fsp for promise based fs methods
import fsp from "fs/promises";

// !! To try any one approach, comment the other two to avoid multiple renaming and confusion

//asynchronous approach (methods accepts a callback to call later)
fs.rename("before.json", "after.json", (err) => {
  if (err) {
    console.log("File renaming unsuccessful");
  } else {
    console.log("File renaming successful");
  }
});

// Promise based apis(methods) (of course this is also asynchronous)
// fsp
//   .rename("before.json", "after.json")
//   .then(() => {
//     console.log("File renaming successful");
//   })
//   .catch((err) => {
//     console.log("File renaming unsuccessful");
//   });

//synchronous approach(no callback(of course it is synchronous and will block the execution until either returns a error or its completion))

// try {
//   fs.renameSync("before.json", "after.json");
//   console.log("File renaming successful.");
// } catch (err) {
//   console.log("File renaming unsuccessful.");
// }
