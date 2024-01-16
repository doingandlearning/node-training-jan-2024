**Exercise: Node.js Module System with TypeScript**

**Objective**: To understand how the module system works in Node.js with TypeScript. By the end of this exercise, you should be able to set up a TypeScript project, create functions in one module, and import them into another module to use them.

---

### **Setup**

1. Initialize a new directory for your project:
   ```bash
   mkdir ts-node-modules
   cd ts-node-modules
   ```

2. Initialize a new Node.js project and install the necessary packages:
   ```bash
   npm init -y
   ```

---

### **Task 1: Project Configuration**

1. Update the `scripts` field in your `package.json`:

    ```json
    "scripts": {
      "start": "node src/main.js",
      "dev": "node --watch src/main.js"
    }
    ```


---

### **Task 2: Create Modules and Functions**

1. Inside the `src` directory, create a new file called `mathFunctions.ts`:

    ```js
    // src/mathFunctions.js

    export function add(a, b) {
      return a + b;
    }

    export function subtract(a, b) {
      return a - b;
    }
    ```

2. Inside the `src` directory, create another file called `main.ts`:

    ```js
    // src/main.ts

    import { add, subtract } from './mathFunctions';

    console.log("Addition:", add(5, 3));       // Expected output: Addition: 8
    console.log("Subtraction:", subtract(5, 3)); // Expected output: Subtraction: 2
    ```

---

### **Task 3: Run**

1. Run the code:

    ```bash
    npm start
    ```

    You should see the expected outputs for the addition and subtraction operations.

2. Run the dev command, `npm run dev`, and notice it restarts when you change the code.

---

### **Challenge (Optional)**

1. Expand the `mathFunctions.js` module by adding functions for multiplication and division.
2. Import and use these new functions in the `main.js` module, then compile and run to see the results.
