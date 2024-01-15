function getRandomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}

async function fetchPersonAsync() {
	const randomId = getRandomInt(83);
	const response = await fetch(`https://swapi.dev/api/people/${randomId}/`);
	return response.json();
}

async function fetchPlanetAsync(url) {
	const response = await fetch(url);
	return response.json();
}

async function main() {
	try {
		const person = await fetchPersonAsync(); // .then()
		console.log("Person:", person.name);
		const planet = await fetchPlanetAsync(person.homeworld); // .then()
		console.log("Homeworld:", planet.name);
		const otherResidents = await Promise.all(planet.residents.map(async (resident) => {
			const response = await fetch(resident)
			const data = await response.json()
			return data.name
		}))
		console.log("These people came from there too:", otherResidents.join(", "))
	} catch (error) {
		console.error("Error:", error);
	}
}

main()
