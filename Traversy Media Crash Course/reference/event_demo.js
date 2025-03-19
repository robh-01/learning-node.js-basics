import EventEmitter from "events";

//init an event emitter object
const myEmitter = new EventEmitter();

//add event listener to an event
myEmitter.on("event", () => {
  console.log("event fired");
});

//emit event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
