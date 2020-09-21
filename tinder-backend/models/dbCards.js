const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
	name: String,
	imgUrl: String,
});

// export default mongoose.model('cards', cardSchema);
module.exports = mongoose.model('cards', cardSchema);