// ERR_API_MESSED_UP

class BBCError extends Error {

	constructor(message, code = "ERR_BBC") {
		super(message);
		// Error => name = Error, message = message, stack
		this.code = code
		this.name = "BBCError"
	}
}

function addNumbers(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		const error = new TypeError("both parameters should be numbers")
		error.code = "ERR_CDA_INVALID_TYPES"
		throw error
	}

	if (a < 0 || b < 0) {
		throw new BBCError("we only deal with positives here", "ERR_BBC_NEGATIVE_NUMBERS_USED")
	}
	return a + b
}

try {
	console.log(addNumbers(1, 2))
	// console.log(typeof addNumbers(false, 2))
	// console.log(addNumbers([1], 2))
	console.log(addNumbers(-4, 5))
} catch (error) {
	if (error instanceof BBCError) {
		console.log(error)
	} else {
		console.log(error)
		console.log(error.code)
	}
}

