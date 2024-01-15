**Exercise: Web Crawler**

You're tasked to write a simple web crawler that fetches information from a public API and then fetches further data based on the initial fetch.

1. Use the `swapi.dev` API. First, fetch a random person (`https://swapi.dev/api/people/{random_id}`).

2. Once you get the person's data, find out which planet they're from. This data is present in the `homeworld` property of the person's data which is a URL.

3. Fetch the details of that planet from the provided URL.

Write up to three versions of this web crawler (or focus on the one you think is most relevant):

a) Using callbacks.
b) Using promises.
c) Using async/await.

Ensure you handle any potential errors at each step, including handling cases where a person or planet does not exist. You can simulate longer delays using `setTimeout` to make the asynchrony more noticeable.

_Bonus_: Make the fetch request abortable. If the request takes longer than 5 seconds, it should be aborted.
