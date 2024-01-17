import EventEmitter from "node:events";
import { createReadStream } from "node:fs";
import { Readable } from "node:stream";

const readStream = createReadStream("longtext.txt")

console.log(readStream instanceof EventEmitter)

readStream.on("data", (chunk) => {
	console.log(chunk.toString().toLowerCase().includes(" "))
});

readStream.on("end", () => {
	console.log("All done.")
})
readStream.on("close", () => {
	console.log("Close stream.")
})

readStream.on("error", (error) => {
	console.log(`Something went wrong: ${error.message}`)
})

class NumberStream extends Readable {
	constructor(max = 10, options = {}) {
		super(options);
		this.current = 1;
		this.max = max
	}

	_read() {
		const interval = setInterval(() => {
			if (this.current <= this.max) {
				console.log(`Pushing number: ${this.current}`)
				this.push(String(this.current))
				this.current += 1
			} else {
				clearInterval(interval);
				this.push(null);
			}
		}, 1000)
	}
}

// const numberStream = new NumberStream(5);
// numberStream.on("data", (chunk) => console.log(chunk.toString()))
// numberStream.on("end", () => console.log("null was just pushed."))

let max = 10
const CountDownReadable = new Readable({
	read() {
		const interval = setInterval(() => {
			if (max === 0) {
				clearInterval(interval)
				this.push(null)
			} else {
				this.push(`Countdown ${max--}`)
			}
		}, 1000)
	}
})

CountDownReadable.on("data", (chunk) => console.log(chunk.toString()))
CountDownReadable.on("end", () => console.log("All done."))