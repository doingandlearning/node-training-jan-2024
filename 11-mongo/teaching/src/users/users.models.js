import mongoose from "mongoose";

// create a schema
const userSchema = new mongoose.Schema({
	name: String,
	team: String,
	email: {
		type: String,
		required: true,
		unique: true
	},

})

// instantiate a model
const User = mongoose.model("User", userSchema);

// export the model
export default User;