import { app } from "./server.js";
import mongoose from "mongoose";

try {
	const db = await mongoose.connect(process.env.DB_CONNECTION_STRING)
	console.log("Connected to database.")
	app.listen(3000, () => {
		console.log("Server started. http://localhost:3000")
	})

} catch (error) {
	console.log("Something went wrong at start up ...", error)
}

