import os from "os";

// answer form gpt for "Why these are all methods but not property or getters"
// The reason os.platform() is a method (i.e., it requires parentheses ()) and not a property or getter is that the platform information might be dynamically determined at runtime and could involve logic or additional computation under the hood.

//get platform
console.log(os.platform());
//prints (linux on linux, win32 on windows, and darwin on mac)

//cpu architecture
console.log(os.arch());

//cpu core info
console.log(os.cpus());
//gives array with object elements containing info about every core of the pc

//gives the amount of free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home directory
console.log(os.homedir());

//uptime
console.log(os.uptime());
//gives the no of second the system has been up
