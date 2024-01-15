const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

const server = http.createServer((req, res) => {
	const pathName = url.parse(req.url).pathname;

	if (pathName === '/') {
		const shoutOutMessage = process.argv[2] || '';
		const homepageHTML = `
      <html>
        <head>
          <title>Portfolio</title>
        </head>
        <body>
          <h1>Welcome to My Portfolio</h1>
          <p>${shoutOutMessage}</p>
        </body>
      </html>
    `;

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(homepageHTML);
	} else if (pathName === '/about') {
		const aboutHTML = `
      <html>
        <head>
          <title>About Me</title>
        </head>
        <body>
          <h1>About Me</h1>
          <p>I have skills in Node.js, JavaScript, HTML, and CSS.</p>
        </body>
      </html>
    `;

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(aboutHTML);
	} else if (pathName === '/contact') {
		if (req.method === 'POST') {
			let body = '';
			req.on('data', (chunk) => {
				body += chunk.toString();
			});
			req.on('end', () => {
				const parsedData = querystring.parse(body);
				const userMessage = parsedData.message ? parsedData.message.replace(/\+/g, ' ') + '\n' : '';
				fs.appendFile('messages.txt', userMessage, (err) => {
					if (err) {
						console.error(err);
					}
				});
				res.writeHead(302, { 'Location': '/contact' });
				res.end();
			});
		} else {
			fs.readFile('messages.txt', 'utf8', (err, data) => {
				if (err) {
					console.error(err);
				} else {
					const contactHTML = `
            <html>
              <head>
                <title>Contact Me</title>
              </head>
              <body>
                <h1>Contact Me</h1>
                <form method="POST">
                  <textarea name="message" rows="4" cols="50" placeholder="Enter your message"></textarea>
                  <br>
                  <input type="submit" value="Submit">
                </form>
                <h2>Messages:</h2>
                <pre>${data}</pre>
              </body>
            </html>
          `;

					res.writeHead(200, { 'Content-Type': 'text/html' });
					res.end(contactHTML);
				}
			});
		}
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('404 Not Found');
	}
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
