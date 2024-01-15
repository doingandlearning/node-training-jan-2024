// 

console.log("Hello!")

// --check

function run(n) {
	if (n === 0) {
		throw new Error("Something went wrong!")
	}
	run(n - 1)
}

run(0)
// node --stack-trace-limit=110 01-intro.js 

// node --print ""
// node --eval ""

// node --watch     // nodemon
