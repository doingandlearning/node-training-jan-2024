import fs from "node:fs";

type User = {
  name: string;
  age: number;
  region: string;
};

type Regions = {
  [key: string]: string[];
};

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

// Callback (hell)
fs.readFile("./user.json", "utf8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }

  const user: User = JSON.parse(userData);
  fs.readFile("./regions.json", (error: Error | null, regionsData: string) => {
    if (error) {
      console.log(error);
      return;
    }

    const regions: Regions = JSON.parse(regionsData);
    const userRegionNewsIDs = regions[user.region];

    fs.readFile("./news.json", (error: Error | null, newsData: string) => {
      if (error) {
        console.log(error);
        return;
      }

      const allNews: NewsArticle[] = JSON.parse(newsData);
      const userNews = allNews.filter((article) =>
        userRegionNewsIDs.includes(article.id)
      );

      userNews.forEach((news) => {
        console.log(news.headline);
        console.log(news.content);
        console.log("-----");
      });
    });
  });
});

// The fs module offers capabilities to read from and write to files.

// Use the following signature for fs.writeFile():
// fs.writeFile(filename, data, [encoding], callback)

// Hints:
// 1. 'filename' is the name of the file you want to write to.
// 2. 'data' is the content you want to write to the file.
// 3. 'encoding' is optional, but if specified, can be set to 'utf8' for plain text.
// 4. The 'callback' function receives an error as its only argument. Check this to ensure the file was written successfully.

// After creation, utilize fs.readFile() to read and display its content.
