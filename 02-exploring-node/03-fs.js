const fs = require("node:fs");


// Callback 
fs.readFile("example-does-not-exist.txt", "utf8", (error, data) => {
	if (error) {
		console.log(error)
		return
	}
	console.log(data)
})

fs.appendFile("newfile.txt", "\nAdded on", () => {
	console.log("I am all done!")
})

