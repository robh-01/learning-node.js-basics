// learning about url object

// const myUrl = new URL("/home", "https://website.com");
// console.log(myUrl.href);
// logs https://website.com/home
//first parameter is called input and second is called base
//doesn't works with base: www.website.com says Invalid URL

//if input is absolute, base is ignored. if input is relative, base is requires.
//input absolute example
// const myUrl = new URL("https://otherwebsite.com/home", "https://website.com");
// console.log(myUrl.href);
//logs https://otherwebsite.com/home

// let myUrl = new URL("https://example.org/foo#bar");
// console.log(myUrl.hash);
// prints #bar

// let myUrl = new URL("https://example.org/foo#bar#another");
// console.log(myUrl.hash);
// prints #bar#another

const myURL = new URL("https://example.org:81/foo");
console.log(myURL.host);
// Prints example.org:81

myURL.host = "example.com:82";
console.log(myURL.href);
// Prints https://example.com:82/foo

console.log(myURL.hostname);
// Prints example.com

// Setting the hostname does not change the port
myURL.hostname = "example.org";
console.log(myURL.href);
// Prints https://example.org:82/foo

// Use myURL.host to change the hostname and port
myURL.host = "example.com:81";
console.log(myURL.href);
// Prints https://example.com:81/foo

console.log(myURL.origin);
// Prints https://example.com:81

// THERE ARE A LOT OF THESE PROPERTIES SEE HERE: https://nodejs.org/api/url.html#url_the_whatwg_url_api
