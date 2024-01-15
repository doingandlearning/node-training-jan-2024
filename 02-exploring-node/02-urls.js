const http = require('node:http');
const url = require('node:url');


const server = http.createServer((req, res) => {
	console.log(req.url)
	const path = url.parse(req.url).pathname
	console.log(req.method)
	if (path === "/") {
		res.writeHead(200, { 'Content-Type': "text/html" })
		res.write("<h1>Home Page</h1>")
	} else if (path === "/about") {
		res.writeHead(200, { 'Content-Type': "text/html" })
		res.write("<h1>About Page</h1>")

	} else {
		res.writeHead(404, { 'Content-Type': "text/html" })
		res.write(`<h1>Not found</h1>`)

	}
	res.end()
})

server.listen(3000)