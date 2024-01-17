export default function error(error, req, res, next) {
	res.status(400).send(
		{ message: error.message || "", route: req.path }
	)
}