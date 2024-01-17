export default function auth(req, res, next) {
	if (req.headers["x-api-key"] !== "supersecret") {
		return res.status(403).send({ message: "Unauthorized." })
	}

	next()
}