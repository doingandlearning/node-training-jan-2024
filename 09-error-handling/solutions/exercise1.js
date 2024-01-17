class InvalidInputError extends Error {
	constructor(message = "Invalid input") {
		super(message);
		this.name = "InvalidInputError";
	}
}

function processData(input) {
	if (typeof input !== 'string' || input.length === 0) {
		throw new InvalidInputError("Input must be a non-empty string");
	}

	// Further processing logic can go here (if applicable)
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
