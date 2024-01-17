const users = [];

// middleware
export async function getAllUsers(req, res, next) {
	// res.send(users)
	next(new Error("Something went wrong"))
}

export function createNewUser(req, res, next) {
	try {
		const user = req.body;
		user.id = users.length + 1;
		users.push(user)
		res.send(users)

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

	if (!userBody.id) {
		return res
			.status(400)
			.send({ error: true, message: "You need to pass an id." })
	}

	const currentUserIndex = users.findIndex(user => user.id === userBody.id)

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
