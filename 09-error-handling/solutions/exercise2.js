function calculate(a, b, operation) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new TypeError("Both arguments must be numbers");
	}

	if (operation === 'divide' && b === 0) {
		throw new RangeError("Cannot divide by zero");
	}

	switch (operation) {
		case 'add':
			return a + b;
		case 'subtract':
			return a - b;
		case 'multiply':
			return a * b;
		case 'divide':
			return a / b;
		default:
			throw new Error("Invalid operation");
	}
}

// Test the function with different scenarios
try {
	console.log(calculate('a', 5, 'add')); // Should catch a TypeError
} catch (error) {
	if (error instanceof TypeError) {
		console.error('Type Error:', error.message);
	} else if (error instanceof RangeError) {
		console.error('Range Error:', error.message);
	} else {
		throw error; // rethrow the error if it's of an unexpected type
	}
}

try {
	console.log(calculate(10, 0, 'divide')); // Should catch a RangeError
} catch (error) {
	if (error instanceof TypeError) {
		console.error('Type Error:', error.message);
	} else if (error instanceof RangeError) {
		console.error('Range Error:', error.message);
	} else {
		throw error; // rethrow the error if it's of an unexpected type
	}
}
