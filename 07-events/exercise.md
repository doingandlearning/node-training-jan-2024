1. **Creating and Emitting an Event:**
   - Task: Create a custom EventEmitter and emit an event named "greet".
   - Objective: When the "greet" event is emitted, it should log "Hello, Node World!" to the console.
   - Instructions:
     - Use the `EventEmitter` class to create a new emitter.
     - Emit the "greet" event using the `emit` method.
     - Attach a listener to the "greet" event that logs "Hello, Node World!".
   - Expected Output: When the "greet" event is emitted, the console should display "Hello, Node World!".

2. **Calculator Event Emitter:**
   - Task: Create an EventEmitter for basic arithmetic operations.
   - Objective: Emit "add", "subtract", "multiply", and "divide" events with respective arguments, and the listeners should log the results.
   - Instructions:
     - Create an EventEmitter instance.
     - Write event listeners for "add", "subtract", "multiply", and "divide" that perform the respective arithmetic operation.
     - Emit each event with two numbers as arguments and observe the logged results.
   - Expected Output: For each arithmetic event emitted, the console should display the result of the operation.

3. **Event Sequence and Management:**
   - Task: Experiment with event listener order and removal.
   - Objective: Predict the sequence of logs for a set of events and listeners. Then, modify the sequence by adding or removing listeners.
   - Instructions:
     - Create an EventEmitter and add multiple listeners to the same event.
     - Emit the event and observe the order of execution.
     - Use `prependListener` to change the order of listeners.
     - Optionally, remove specific listeners using `removeListener` and observe the changes.
   - Expected Output: The student should be able to manipulate and predict the order of event listener execution and understand the impact of adding or removing listeners.

These exercises offer practical application of the EventEmitter concept, reinforcing the knowledge of creating, emitting, listening, and managing events in Node.js.