// const logger = require("pino")();
import pino from "pino";
const logger = pino();

import { greeter, goodbye } from "./my-functions.js";
// const { greeter, goodbye } = require("./my-functions")

logger.info(greeter("Jamie"))
logger.warn(goodbye("Kevin"))

// CommonJS
// console.log(module)
logger.warn("Hello!")