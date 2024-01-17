import express from "express"

import userRoutes from "./users/users.routes.js"
import taskRoutes from "./tasks/tasks.routes.js"
import logging from "./middlewares/logging.js"
import error from "./middlewares/errorhandling.js"
const app = express()


// Allows to read the JSON body of a request
app.use(express.json())
// app.use(logging)

app.get("/", (req, res) => res.send({ message: "Hello!" }))

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/tasks", taskRoutes)


app.use(error)
app.listen(3000, () => {
	console.log("Server started. http://localhost:3000")
})

