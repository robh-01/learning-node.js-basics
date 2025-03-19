let q = new URL("http://localhost:8080/default.htm?year=2017&month=february");

console.log(q.host);
// prints localhost:8080
console.log(q.pathname);
// prints /default.htm
console.log(q.search);
// prints ?year=2017&month=february

console.log(q.searchParams.get("year"));
// prints 2017
console.log(q.searchParams.get("month"));
// prints february

let query = Object.fromEntries(q.searchParams.entries()); //returns an object {year: 2017, month: 'february'}
console.log(query);
