var downloads = browser.downloads.search({});
downloads.then((downloadItems)=>{
	console.log(downloadItems)
	for(let i in downloadItems ) {
		console.log(downloadItems[i].id)
		console.log(downloadItems[i].url)
		console.log(downloadItems[i].filename)
	}
})
