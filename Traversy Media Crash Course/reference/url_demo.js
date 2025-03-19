const myUrl = new URL(
  "http://mywebsite.com:3000/hello.html?id=100&status=active"
);

// get serialized url
//below both are same
//property approach
console.log(myUrl.href);
//method approach
console.log(myUrl.toString());
//prints http://mywebsite.com:3000/hello.html/?id=100&status=active

// get host
console.log(myUrl.host);
//prints mywebsite.com:3000

//get host name
console.log(myUrl.hostname);
//prints mywebsite.com

//pathname
console.log(myUrl.pathname);
//prints /hello.html

//serialized query
console.log(myUrl.search);
//prints everything after and with the "?" i.e ?id=100&status=active

// get the value of a search param
console.log(myUrl.searchParams.get("status"));
//prints "active"

//make search params object
console.log(Object.fromEntries(myUrl.searchParams.entries()));
//prints the object with key value pair of search parameters

//add param
myUrl.searchParams.append("password", "abc123");
//check if the above param is added
console.log(Object.fromEntries(myUrl.searchParams.entries()));
//prints object with the above param key value too

//loop through params
myUrl.searchParams.forEach((name, value) => {
  console.log(`${name}: ${value}`);
});
