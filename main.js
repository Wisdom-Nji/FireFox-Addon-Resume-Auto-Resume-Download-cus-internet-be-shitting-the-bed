function promised() {
	return browser.downloads;
}

async function call_promised() {
	let result = await promised();
	console.log(result)
}


call_promised();
