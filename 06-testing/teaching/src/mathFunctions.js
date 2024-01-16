export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}

export function multiply(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Both parameters must be numbers.")
	}
	return a * b;
}