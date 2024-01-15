const http = require('node:http');
// CommonJS

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Welcome to Node.js!</h1>');
	res.write('<p>Happy January!!!</p>');
	res.end();
});

server.listen(process.env.PORT || 3000);