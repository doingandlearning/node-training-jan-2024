function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function fetchPerson(callback) {
  const randomId = getRandomInt(83); // there are 82 people in the API as of the last check
  fetch(`https://swapi.dev/api/people/${randomId}/`)
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}

function fetchPlanet(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .catch((error) => callback(error));
}

fetchPerson(
  (error, person) => {
    if (error) {
      console.error("Error fetching person:", error);
      return;
    }
    console.log("Person:", person.name);
    fetchPlanet(
      person.homeworld,
      (error, planet) => {
        if (error) {
          console.error("Error fetching planet:", error);
          return;
        }
        console.log("Homeworld:", planet.name);
      }
    );
  }
);
