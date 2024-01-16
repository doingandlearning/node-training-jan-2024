import { EventEmitter } from "node:events";
import { watch } from "node:fs"
const ee = new EventEmitter()

const events = {
	"smile": "SMILE",
	"uppercase": "UPPERCASE"
}

ee.on(events.smile, () => {
	console.log("I noticed you were smiling!");
})


ee.once(events.smile, () => {
	console.log("I smile back");
})

ee.prependListener(events.smile, () => {
	console.log("I noticed you were smiling first!")
})

ee.on(events.smile, (reason) => {
	console.log(`I see you are smiling - is it because ${reason.toLowerCase()}`)
})


ee.emit(events.smile, "It's snowing.")
ee.emit(events.smile, "It's the afternoon.")
ee.emit(events.smile, "I'm playing with Node.")

ee.on(events.uppercase, (word) => {
	console.log(word.toUpperCase())
})

ee.emit(events.uppercase, "this is lowercase")

ee.emit("i-am-not-listening")

ee.on("error", (error) => {
	console.log("There was an error", error)
})

ee.emit("error")
// no returning?