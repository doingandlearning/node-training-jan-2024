Here are a couple of exercises based on the concepts of creating custom errors and handling different error types in a catch block:

### Exercise 1: Creating a Custom Error Class

**Objective**: To create a custom error class and use it in a function to handle specific error scenarios.

**Task**:
1. Create a custom error class called `InvalidInputError` that extends the built-in `Error` class.
2. In the constructor of this class, accept a message and optionally set a default error message if none is provided.
3. Write a function `processData` that takes a string as input.
4. Inside `processData`, throw an `InvalidInputError` if the input is not a string or is an empty string.
5. Use a `try/catch` block to call `processData` and handle the `InvalidInputError` by logging the error message to the console.

**Starter Code**:
```javascript
// TODO: Implement a new Error type: InvalidInputError

function processData(input) {
  // Implement your logic here
}

// Test the function with try/catch
try {
  processData(123); // Should throw an InvalidInputError
} catch (error) {
  if (error instanceof InvalidInputError) {
    console.error(error.message);
  } else {
    throw error; // rethrow the error if it's not an InvalidInputError
  }
}
```

### Exercise 2: Handling Different Types of Errors

**Objective**: To distinguish and handle different types of errors using a single `catch` block.

**Task**:
1. Write a function `calculate` that takes two arguments and a string representing an operation ('add', 'subtract', 'multiply', 'divide').
2. Inside `calculate`, throw a `TypeError` if any of the arguments are not numbers.
3. Throw a `RangeError` if the operation is 'divide' and the second argument is 0.
4. Perform the operation and return the result.
5. Use a `try/catch` block to call `calculate` and handle both `TypeError` and `RangeError` separately, logging appropriate messages for each.

**Starter Code**:
```javascript
function calculate(a, b, operation) {
  // Implement your logic here
}

// Test the function with different scenarios
try {
  console.log(calculate('a', 5, 'add')); // Should catch a TypeError
  console.log(calculate(10, 0, 'divide')); // Should catch a RangeError
} catch (error) {
	// Test for different types of errors: TypeError/RangeError 
	// Give more descriptive messages for these
	
  if (error instanceof TypeError) {
    console.error('Type Error:', error.message);
  } else if (error instanceof RangeError) {
    console.error('Range Error:', error.message);
  } else {
    throw error; // rethrow the error if it's of an unexpected type
  }
}
```

These exercises provide hands-on experience with creating custom error classes and handling different types of errors, reinforcing the concepts from the workshop.