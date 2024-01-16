import express from "express"

import userRoutes from "./users/users.routes.js"

const app = express()

app.get("/", (req, res) => res.send({ message: "Hello!" }))

app.use("/api/v1/users", userRoutes)

app.listen(3000, () => {
	console.log("Server started. http://localhost:3000")
})

