import User from "./users.models.js"

// middleware
export async function getAllUsers(req, res, next) {
	try {
		const users = await User.find();
		res.send(users);
	} catch (error) {
		next(error);
	}
}

export async function createNewUser(req, res, next) {
	try {
		if (!req.body.name || !req.body.team) {
			return next(new Error("You need to send the name and team."))
		}

		const user = new User(req.body)
		await user.save();
		res.status(201).send(user)

	} catch (error) {
		next(error)
	}
}

export async function getById(req, res) {
	try {
		const user = await User.findById(req.params.id)

		if (!user) {
			return res.status(404).send({ message: "User not found." })
		}
		res.send(user)
	} catch (error) {
		next(error)
	}
}

export async function updateUser(req, res) {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!user) {
			return res.status(404).send({ message: "User not found." })
		}
		res.send(user)
	} catch (error) {
		next(error)
	}
}


export async function deleteUser(req, res) {
	try {
		const user = await User.findByIdAndDelete(req.params.id)

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(204).send();
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Something went wrong" });
	}
}

// /users/team/:teamName

export async function findUsersByTeam(req, res) {
	try {
		console.log("Here")
		const users = await User.find({ team: req.params.teamName })
		res.send(users)
	} catch (error) {
		next(error)
	}
}