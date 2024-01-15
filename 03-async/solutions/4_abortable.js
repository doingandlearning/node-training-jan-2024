function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

async function fetchPlanetAsync(url) {
  const response = await fetch(url);
  return response.json();
}

async function fetchPersonAsyncTimeout() {
  const randomId = getRandomInt(83);
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000); // abort after 5 seconds

  try {
    const response = await fetch(`https://swapi.dev/api/people/${randomId}/`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return response.json();
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}


// Use this new function in the async/await example:
(async () => {
  try {
    const person = await fetchPersonAsyncTimeout();
    console.log("Person:", person.name);
    const planet = await fetchPlanetAsync(person.homeworld);
    console.log("Homeworld:", planet.name);
  } catch (error) {
    // Narrow down the error type using a type guard
    const err = error;
    if (err.name === "AbortError") {
      console.error("Request aborted due to timeout");
    } else {
      console.error("Error:", err.message);
    }
  }
})();
