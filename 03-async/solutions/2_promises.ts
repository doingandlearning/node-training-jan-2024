function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

function fetchPersonPromise(): Promise<any> {
  const randomId = getRandomInt(83);
  return fetch(`https://swapi.dev/api/people/${randomId}/`).then((response) =>
    response.json()
  );
}

function fetchPlanetPromise(url: string): Promise<any> {
  return fetch(url).then((response) => response.json());
}

fetchPersonPromise()
  .then((person) => {
    console.log("Person:", person.name);
    return fetchPlanetPromise(person.homeworld);
  })
  .then((planet) => {
    console.log("Homeworld:", planet.name);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
