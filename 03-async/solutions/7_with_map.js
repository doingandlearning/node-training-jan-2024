const fs = require("node:fs/promises");

async function getNewsForUser() {
	try {
		// Read and parse the user data
		const [userDataString, regionsDataString, newsDataString] = await Promise.all(
			["../user.json", "../regions.json", "../news.json"].map(async (path) => fs.readFile(path, "utf8"))
		)

		const user = JSON.parse(userDataString);
		const regions = JSON.parse(regionsDataString);
		const userRegionNewsIDs = regions[user.region];
		const allNews = JSON.parse(newsDataString);

		// Filter out the relevant news articles for the user's region
		const userNews = allNews.filter((article) =>
			userRegionNewsIDs.includes(article.id)
		);
		return userNews;
	} catch (error) {
		console.log(error);
		return []; // Return an empty array in case of an error
	}
}

// Usage
getNewsForUser("./user.json").then((news) => {
	news.forEach((article) => {
		console.log(article.headline);
		console.log(article.content);
		console.log("-----");
	});
});
