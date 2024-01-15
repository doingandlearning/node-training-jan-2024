const fs = require("node:fs");


// Callback 
fs.readFile(process.argv[2], "utf8", (error, data) => {
	if (error) {
		console.log(error)
		return
	}
	console.log(data)
})