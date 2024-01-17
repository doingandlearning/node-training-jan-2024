const fetchWithRetry = (url, numRetries = 3) => {
	const attemptFetch = (retryCount) => {
		fetch(url)
			.then(response => {
				if (!response.ok) throw new Error('Network response was not ok.' + response.status);
				return response.json();
			})
			.catch(error => {
				if (retryCount > 0) {
					console.log(`Retrying... attempts left: ${retryCount}`);
					setTimeout(() => attemptFetch(retryCount - 1), 1000);
				} else {
					console.error('Max retries reached. Operation failed:', error);
				}
			});
	};

	attemptFetch(numRetries);
};

fetchWithRetry('https://api.github.com/user');