// fetch("https://api.github.com/users/doingandlearning")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data));


const ac = new AbortController()
const signal = ac.signal

setTimeout(() => {
	ac.abort()
}, 100)

async function getJson(url) {
	try {
		const response = await fetch(url, { signal: signal });
		if (!response.ok) {
			throw new Error(response.status);
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Something went wrong!", error.message);
	}
}

async function run() {
	const githubData = await getJson("https://api.github.com/users");
	console.log(githubData);
}

run();



const user = fetch("url1")
const data2 = fetch("url1")
const data3 = fetch("url1")
const data4 = fetch("url1")

const responses = await Promise.all([user, data2, data3, data4])