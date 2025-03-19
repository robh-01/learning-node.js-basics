import path from "path";

// as we don't have __filename in module js we get it using this:
// console.log(import.meta); // logs an object that contains filename, pathname, url of this module
// console.log(import.meta.url); //log the url
const filename = import.meta.filename; //get the filename

console.log(filename);
//prints /home/robh/repos/learning-node.js-basics/Traversy Media Crash Course/reference/path_demo.js

//get base file name
console.log(path.basename(filename));
//prints path_demo.js

//get directory name
console.log(path.dirname(filename));
//prints /home/robh/repos/learning-node.js-basics/Traversy Media Crash Course/reference

// get file extension
console.log(path.extname(filename));
// prints .js

//create path object(with properties root, dir, base, ext, name)
let pathObject = path.parse(filename);
console.log(pathObject);

//concatenate paths
// to do this: current dir/test/hello.html i.e ../test/hello.html
console.log(path.join(import.meta.dirname, "test", "hello.html"));
// path.join() is good as it uses correct delimiter(signs that separated different parts of a url) according to the os.
