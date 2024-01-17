// Developers

// Users

// Operational Errors -> network failure, file not found, user input, disk full
// retry, user feedback -> strategies to recover 

// Developer Errors -> type errors, syntax errors, logic errors
// fail fast ... crash ... alert someone ... 

const err = new Error("Something went wrong")

console.log(err.name)
console.log(err.message)
console.log(err.stack)

SyntaxError();
TypeError();
ReferenceError();
URIError();
RangeError();

// Be consistent!
// Try to trip into the failure path as quickly possible
// Propogate ... 