const mongoose = require('mongoose')

// Create the results moodel
mongoose.model('results', {
	title: String,
	required: true,
	description: String,
	required: true,
	url: String,
	required: true,
	links: [
		{
			title: String,
			url: String,
		}
		{
			title: String,
			url: String,
		}
	]
})
