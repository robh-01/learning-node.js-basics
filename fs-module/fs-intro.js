import fs from "fs";

fs.access("./before.json", (error) => {
  if (error) {
    console.log("File doesn't exits");
  } else {
    console.log("File exists");
  }
});
