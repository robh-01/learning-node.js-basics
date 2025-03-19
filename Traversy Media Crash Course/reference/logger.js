// a practical example of event emitter
import EventEmitter from "events";
import * as uuid from "uuid";

// console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    //call event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

export { Logger  };
