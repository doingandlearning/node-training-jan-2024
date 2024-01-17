// open the text file
// get rid of the word libero
// write the solution to a new file

import { createReadStream, createWriteStream } from "fs";
import { Transform, PassThrough } from "node:stream";
import { createGzip } from "node:zlib";
import { pipeline } from "stream";

const readStream = createReadStream("longtext.txt");
const writeStream = createWriteStream("longtext.redacted.txt.gz");

const transformStream = new Transform({
	transform(chunk, encoding, callback) {
		const result = chunk.toString().replaceAll("libero", "#@!#@#");
		this.push(result);
		callback();
	},
});

const monitor = new PassThrough()

monitor.on("data", (chunk) => {
	console.log("Contains the word libero? ", chunk.toString().includes("libero"))
})


// readStream
// 	.pipe(transformStream)
// 	.pipe(createGzip())
// 	.pipe(monitor)
// 	.pipe(writeStream)
// 	.on("finish", () => {
// 		console.log("all done");
// 	}).on("error", () => {
// 		console.log("Something went wrong!")
// 	});

pipeline(
	readStream,
	transformStream,
	createGzip(),
	writeStream,
	(err) => {
		if (err) {
			console.log("Something went wrong!")
		} else {
			console.log("All done!")
		}
	}
)
