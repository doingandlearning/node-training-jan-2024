import { EventEmitter } from "events";
const calcEmitter = new EventEmitter();

// TODO: Write event listeners for "add", "subtract", "multiply", "divide"
// Example:
// calcEmitter.on('add', (a, b) => {
//   console.log(`Addition Result: ${a + b}`);
// });
calcEmitter.on("add", (a, b) => {
  console.log(`Addition Result: ${a + b}`);
});

calcEmitter.on("subtract", (a, b) => {
  console.log(`Subtraction Result: ${a - b}`);
});

calcEmitter.on("multiply", (a, b) => {
  console.log(`Multiplication Result: ${a * b}`);
});

calcEmitter.on("divide", (a, b) => {
  console.log(`Division Result: ${a / b}`);
});
// TODO: Emit each arithmetic event with two numbers as arguments
// Example:
// calcEmitter.emit('add', 5, 3);

calcEmitter.emit("add", 5, 3);
calcEmitter.emit("subtract", 5, 3);
calcEmitter.emit("multiply", 5, 3);
calcEmitter.emit("divide", 5, 3);
