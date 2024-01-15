// ES6 ... ECMAScript ... JavaScript ... Oracle ...

// ES6 --- ES2015
// ES7 --- ES2016
// ES8 --- ES2017
// ES2018

// TC39

// ES6-

const fs = require("node:fs");

// CALLBACK HELL!!!!
fs.readFile("user.json", "utf8", (error, userString) => {
	if (error) {
		console.log(error)
		return
	}
	fs.readFile("regions.json", "utf8", (error, regionsString) => {
		if (error) {
			console.log(error)
			return
		}
		fs.readFile("news.json", "utf8", (error, newsString) => {
			if (error) {
				console.log(error)
				return
			}
			const userData = JSON.parse(userString)
			const newsData = JSON.parse(newsString)
			const regionsData = JSON.parse(regionsString)

			const userNewsIds = regionsData[userData.region]
			const userNews = newsData.filter(article => userNewsIds.includes(article.id))

			userNews.forEach((news) => {
				console.log(news.headline);
				console.log(news.content);
				console.log("-----");
			});
		})
	})
})



