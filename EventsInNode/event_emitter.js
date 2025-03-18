import EventEmitter from "events";

const eventEmitter = new EventEmitter();

// eventEmitter.on("start", () => {
//   console.log("started");
// });

// eventEmitter.emit("start");

//passing argument to the event handler function
// eventEmitter.on("suruwat", (param) => {
//   console.log("suruwat bhayo: ", param);
// });

// eventEmitter.emit("suruwat", "Roshan Bhusal");

//passing multiple arguments
// eventEmitter.on("start", (start, end) => {
//   console.log(`started from ${start} to ${end}`);
// });

// eventEmitter.emit("start", 1, 100);
// eventEmitter.emit("start", 5, 200);
// event handlers executes only for both emits

//listen to an event only once using once()
// eventEmitter.once("start", (start, end) => {
//   console.log(`started from ${start} to ${end}`);
// });

// eventEmitter.emit("start", 1, 100);
// eventEmitter.emit("start", 5, 200);
// event handlers executes only for first emit

//remove a listener with off() or removeListener()
const listener = () => {
  console.log("started");
};
//with off()
// eventEmitter.on("start", listener);
// eventEmitter.emit("start");
// // logs started
// eventEmitter.off("start", listener);
// eventEmitter.emit("start");
// //doesn't logs
// //setting again to show usage for removeListener
// eventEmitter.on("start", listener);
// eventEmitter.emit("start");
// // logs started
// //with removeListener()
// eventEmitter.removeListener("start", listener);
// eventEmitter.emit("start");

eventEmitter.on("start", listener);
eventEmitter.on("start", () => {
  console.log("another listener");
});
console.log("Before removing: ");

eventEmitter.emit("start");
//logs: started
// another listener

eventEmitter.removeAllListeners("start"); // removes all the listener for the event start
console.log("After removing: ");
eventEmitter.emit("start");
// no logs
