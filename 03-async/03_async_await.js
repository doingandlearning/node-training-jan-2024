const fs = require("node:fs/promises");

async function getNewsForUser(userFilePath) {
  try {
    // Read and parse the user data
    const userDataString = await fs.readFile(userFilePath, "utf8");
    const user = JSON.parse(userDataString);

    // Read and parse the regions data
    const regionsDataString = await fs.readFile("./regions.json", "utf8");
    const regions = JSON.parse(regionsDataString);
    const userRegionNewsIDs = regions[user.region];

    // Read and parse the news data
    const newsDataString = await fs.readFile("./news.json", "utf8");
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
