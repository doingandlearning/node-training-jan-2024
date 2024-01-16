## Debugging Lab: Dive Deep into Node.js Debugging

### Part 1: Simple Arithmetic Debugging

**Objective**: Understand the basics of debugging, navigate the Chrome DevTools, and modify code during a debugging session.

1. **Setup**:
    - Open a terminal or command prompt and navigate to the folder containing the `calculator.js` file.
    - Run the command `node --inspect-brk calculator.js`. This starts the Node.js application with a debugger attached and pauses execution on the first line.

2. **Using Chrome DevTools**:
    - Open Google Chrome and navigate to `chrome://inspect`.
    - Under "Remote Target", click on "inspect" for the `calculator.js` process.
    - The Chrome DevTools will open. Use the "Resume script execution" (F8) to continue until the debugger statement or error is encountered.

3. **Debugging**:
    - In DevTools, locate the line where subtraction is mistakenly used instead of addition.
    - Modify the line to use the correct operation.
    - Continue script execution and ensure the correct result is displayed in the console.

---

### Part 2: Asynchronous Operations and HTTP Server Debugging

**Objective**: Understand the asynchronous nature of Node.js, work with Chrome DevTools to debug asynchronous operations, and gain insights into the event loop.

1. **Setup**:
    - In your terminal or command prompt, navigate to the folder containing `server.js`.
    - Run the command `node --inspect-brk server.js`. This starts the Node.js application in debug mode and pauses execution on the first line.
    - In Google Chrome, navigate to `chrome://inspect` and connect to the `server.js` process. Or use VS Code to attach to current process.

2. **Observing Asynchronous Operations**:
    - Once connected, you'll observe that the program is paused on the first line.
    - Set a breakpoint inside the `setTimeout` function and one inside the `while` loop.
    - Use the "Resume script execution" button and observe when each breakpoint is hit, noting the difference in timing.
    - Note: You'll need to trigger the server (by visiting in your browser or otherwise) before the code will trigger.

3. **Understanding Event Loop Blocking**:
    - With the program paused inside the `while` loop, take note of the loop's blocking nature.
    - Use the step-over function (F10) to step through each iteration of the loop. Observe how this synchronous loop can block the Node.js event loop.

4. **Exploring File Operations**:
    - Continue script execution until the breakpoint inside the `setTimeout` function is hit.
    - Here, the program simulates a delay using `setTimeout` before reading the file.
    - Inspect the callback of the `fs.readFile` function. This is where the contents of the file (the script itself) will be read and returned as the server's response.

5. **Experimenting with the HTTP Server**:
    - Open a web browser and navigate to `http://127.0.0.1:1337/`.
    - In DevTools, observe the incoming request logs and the order of execution due to the asynchronous nature of the operations.
    - Experiment by setting additional breakpoints, stepping through code, and inspecting variables to deepen your understanding.

---

By the end of this lab, you should have a clearer understanding of how to debug Node.js applications, particularly those involving asynchronous operations. Remember, practice is key! The more you debug, the more intuitive it becomes.