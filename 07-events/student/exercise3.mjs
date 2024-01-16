import { EventEmitter } from "events";
const sequenceEmitter = new EventEmitter();

// Adding multiple listeners to the same event
sequenceEmitter.on("sequence", () => console.log("First listener"));
sequenceEmitter.on("sequence", () => console.log("Second listener"));

// TODO: Experiment with prependListener to change the order
// Example:
// sequenceEmitter.prependListener('sequence', () => console.log('Third listener'));

// Emit the event
sequenceEmitter.emit("sequence");

// TODO: Optionally, remove specific listeners and observe the changes
// Example:
// sequenceEmitter.removeListener('sequence', /* reference to listener function */);
