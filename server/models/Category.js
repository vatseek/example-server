const mongoose = require('mongoose')
const { Schema } = mongoose

const CategorySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ collection: 'categories' },
)

module.exports = mongoose.model('Category', CategorySchema)
