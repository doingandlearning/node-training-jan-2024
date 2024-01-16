import express from "express"

const app = express()

app.get("/", (req, res) => res.send({ message: "Hello!" }))

app.listen(3000, () => {
	console.log("Server started. http://localhost:3000")
})

// /controllers/users.controllers.js
// /routes/users.routes.js
// /models/users.models.js


// /resources/users/users.controllers.js
// /resources/users/users.routes.js
// /resources/users/users.models.js