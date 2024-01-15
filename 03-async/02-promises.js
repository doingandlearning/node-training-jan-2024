const fs = require("node:fs/promises")

// Promise
// Process that can wait ... async ... returns an error or result

// Pending
// Settled ... Resolved or Rejected

const userData = fs.readFile("user.json", "utf8").then(userString => {
	const userData = JSON.parse(userString)
	return userData
})

const regionsData = fs.readFile("regions.json", "utf8").then(regionsString => {
	const regionsData = JSON.parse(regionsString)
	return regionsData
})

const newsData = fs.readFile("news.json", "utf8").then(newsString => {
	const newsData = JSON.parse(newsString)
	return newsData
})

Promise.all([userData, regionsData, newsData]).then(([userData, regionsData, newsData]) => {
	const userNewsIds = regionsData[userData.region]
	const userNews = newsData.filter(article => userNewsIds.includes(article.id))

	userNews.forEach((news) => {
		console.log(news.headline);
		console.log(news.content);
		console.log("-----");
	});
}).catch(error => {
	console.log("There was an error")
})

Promise.allSettled([userData, regionsData, newsData]).then((data) => {
	console.log(data.every(data => data.status === 'fulfilled'))
	data.forEach(result => {
		if (result.status === "fulfilled") {
			console.log(result.value)
		} else {
			console.log(result.reason)
		}
	})
	// const userNewsIds = regionsData[userData.region]
	// const userNews = newsData.filter(article => userNewsIds.includes(article.id))

	// userNews.forEach((news) => {
	// 	console.log(news.headline);
	// 	console.log(news.content);
	// 	console.log("-----");
	// });
}).catch(error => {
	console.log("There was an error")
})