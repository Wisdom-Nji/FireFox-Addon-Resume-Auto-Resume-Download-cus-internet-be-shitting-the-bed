var downloads = browser.downloads.search({});
downloads.then((downloadItems)=>{
	console.log(downloadItems)
	for(let i in downloadItems ) {
		console.log(downloadItems[i].id)
		console.log(downloadItems[i].url)
		console.log(downloadItems[i].filename)

		console.log("Can Resume:", downloadItems[i].canResume);
		
		browser.downloads.download({url: downloadItems[i].url})
	}
})
