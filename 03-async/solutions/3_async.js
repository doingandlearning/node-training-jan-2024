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

(async () => {
  try {
    const person = await fetchPersonAsync();
    console.log("Person:", person.name);
    const planet = await fetchPlanetAsync(person.homeworld);
    console.log("Homeworld:", planet.name);
  } catch (error) {
    console.error("Error:", error);
  }
})();
