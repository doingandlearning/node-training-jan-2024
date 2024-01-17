const users = [];

// middleware
export async function getAllUsers(req, res, next) {
	res.send(users)
}

export function createNewUser(req, res, next) {
	try {
		const user = req.body;

		if (!user.name || !user.team) {
			return next(new Error("You need to send the name and team."))
		}

		user.id = users.length + 1;
		users.push(user)
		res.status(201).send(user)

	} catch (error) {

	}
}

export function getById(req, res) {
	const id = Number(req.params.id)
	const user = users.find(user => user.id === id)

	if (!user) {
		return res.status(404).send({ message: "User not found." })
	}
	res.send(user)
}

export function updateUser(req, res) {
	const userBody = req.body;

	const currentUserIndex = users.findIndex(user => user.id === req.params.id)

	if (currentUserIndex === -1) {
		return res.status(404).send({ message: "User not found." })
	}

	users[currentUserIndex] = {
		...users[currentUserIndex],
		...userBody
	}

	res.send(users[currentUserIndex])

}


export function deleteUser(req, res) {
	try {
		const userId = parseInt(req.params.id);
		const userIndex = users.findIndex((u) => u.id === userId);

		if (userIndex === -1) {
			return res.status(404).json({ message: "User not found" });
		}

		users.splice(userId, 1);

		res.status(204).send();
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Something went wrong" });
	}
}
