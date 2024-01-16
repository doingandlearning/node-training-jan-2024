import { setTimeout } from "timers/promises"

export async function fakeFetch(url) {
	await setTimeout(400);
	// http://error.com 
	if (url === "http://error.com") {
		throw new Error("network error")
	}

	return Buffer.from("some data")

}