// fetch("https://api.github.com/users/doingandlearning")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));

async function getJson(url) {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error(response.status)
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.log("Something went wrong!", error.message)
	}
}

async function run() {
	const githubData = await getJson("https://api.github.com/use")
	console.log(githubData)
}

run()