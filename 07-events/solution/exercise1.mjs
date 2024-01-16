import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

// TODO: Attach a listener to the "greet" event that logs "Hello, Node World!"
myEmitter.on("greet", () => console.log("Hello, Node World!"));
// TODO: Emit the "greet" event here
myEmitter.emit("greet");
