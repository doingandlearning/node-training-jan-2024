const users = [];

export function getAllUsers(req, res) {
	res.send(users)
}

export function createNewUser(req, res) {
	const user = req.body;

	if (!user.name || !user.team) {
		return res
			.status(400)
			.send({ error: true, message: "You need to send team and name." })
	}

	user.id = users.length + 1;
	users.push(user)
	res.send(users)
}

export function getById(req, res) {
	const id = Number(req.params.id)
	const user = users.find(user => user.id === id)

	if (!user) {
		return res.status(404).send({ message: "User not found." })
	}
	res.send(user)
}

export function updateUser(req, res) { }