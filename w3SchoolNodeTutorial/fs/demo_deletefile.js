import fs from "fs";

fs.unlink("./demo2.txt", (err) => {
  if (err) {
    console.log("Unable to delete the file");
  } else {
    console.log("File deletion successful");
  }
});
