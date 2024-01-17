export function validateUserInput(req, res, next) {

	// Check for required fields in req.body and validate them
	if (!req.body.name || !req.body.team) {
		// If validation fails, send a 400 response with an error message
		return res.status(400).send({ message: "You need to send the name and the body in the input." })
	}

	// If validation succeeds, call next()

	next()
}