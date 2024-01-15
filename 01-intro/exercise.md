# Exercises (`01-introduction`)

1. In the labs folder, there is a file called `will-throw.js`. Run the file without any flags and then run with the appropriate flag to see the full call stack.

  > In the first case, there should only be ten stack frames in the error output. In the second, there should be significantly more.

2. There are two other files in the labs folder, `bad-syntax.js` and `correct-syntax.js`. Use the appropriate flag to check the syntax of each file.

  > There should be no output when checking `correct-syntax.js` and there should be a Syntax Error when checking the syntax of `bad-syntax.js`.

3. In the REPL, explore the `http` object. Use the double tab to explore some of the methods available. Also, check out the docs (https://nodejs.org/docs/latest-v20.x/api/http.html)

4. Edit the server to send different responses, for example:
  - Play with the status code
  - Add some additional headers
  - Call the res.end() to send things
