const tasks = [];

// middleware
export async function getAllTasks(req, res, next) {
	res.send(tasks)
}

export function createNewTask(req, res, next) {
	try {
		const task = req.body;

		// if (!task.name || !task.team) {
		// 	return next(new Error("You need to send the name and team."))
		// }

		task.id = tasks.length + 1;
		tasks.push(task)
		res.send(tasks)

	} catch (error) {

	}
}

export function getById(req, res) {
	const id = Number(req.params.id)
	const task = tasks.find(task => task.id === id)

	if (!task) {
		return res.status(404).send({ message: "task not found." })
	}
	res.send(task)
}

export function updateTask(req, res) {
	const taskBody = req.body;

	if (!taskBody.id) {
		return res
			.status(400)
			.send({ error: true, message: "You need to pass an id." })
	}

	const currentTaskIndex = tasks.findIndex(user => user.id === userBody.id)

	if (currentTaskIndex === -1) {
		return res.status(404).send({ message: "Task not found." })
	}

	asks[currentTaskIndex] = {
		...tasks[currentTaskIndex],
		...taskBody
	}

	res.send(tasks[currentTaskIndex])

}


export function deleteTask(req, res) {
	try {
		const taskId = parseInt(req.params.id);
		const taskIndex = tasks.findIndex((u) => u.id === taskId);

		if (taskIndex === -1) {
			return res.status(404).json({ message: "task not found" });
		}

		tasks.splice(taskId, 1);

		res.status(204).send();
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Something went wrong" });
	}
}
