This is a longer exercise and practices all of the things we've looked at so far.

Feel free to use the code we wrote during the class and the solution code to help you.

Do ask questions of me and of each other if you get stuck. Feel free to go off-piste and dive into aspects that interest you.

Keep note of any questions/wonderings/discoveries you have during the exercise so that we can share them together.

### Stage 1: Setting Up the Server
**Objective:** Create a basic Node.js server that listens on a specified port.
- Set up a new project.
- Write code to import the `http` module.
- Create a basic server that listens on port 3000.
- Test the server to ensure it's running.

### Stage 2: Serving Static HTML Content
**Objective:** Serve static HTML content for different routes.
- Import the `url` module.
- Set up routes for `'/'` (homepage) and `'/about'`.
- Serve simple HTML content for these routes.
- Test the server to ensure it serves the correct content on each route.

### Stage 3: Dynamic Content and Environment Variables
**Objective:** Introduce dynamic content and environment variables.
- Install and import the `dotenv` module (or use the --env-file flag) 
- Use an environment variable for the server port.
- Modify the homepage to include a dynamic message passed as a command-line argument.
	- This would mean using the process.argv and passing a string on startup e.g. `node server.js "Hello from the BBC!"`
- Test the server with different environment settings and command-line strings.

### Stage 4: Handling POST Requests and File Operations
**Objective:** Handle POST requests and perform file operations.
> Note: There's a lot of complexity in this part - feel free to use the solution code to help here. We'll go over it when we review.
- Import the `fs` and `querystring` modules.
- Set up a route for `'/contact'` that handles both GET and POST requests.
- For POST requests, parse the incoming data and append it to a file.
- For GET requests, read from the file and display its contents on the page.
- Test the form submission and file reading functionality.

### Stage 5: Error Handling and Response Codes
**Objective:** Implement error handling and proper use of HTTP response codes.
- Add error handling for file operations.
- Use appropriate response codes, like 302 for redirection after POST and 404 for non-existent routes.
- Test the error handling by triggering different scenarios (e.g., non-existent route, file read/write error).

### Stage 6: Refactoring and Best Practices
**Objective:** Refactor the code for better structure and apply best practices.
- Refactor the code into modular functions or separate files for better readability and maintenance.
- Ensure consistent coding standards and best practices are followed.
- Test the refactored application to ensure it still functions as expected.

