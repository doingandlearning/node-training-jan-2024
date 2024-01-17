import pino from "pino";

const logger = pino();

export default function logging(req, res, next) {
	logger.info(req.path)
	logger.info(req.body)
	next()
}