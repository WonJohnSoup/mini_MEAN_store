var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	product: String,
	description: String,
	imageURL: String,
	qty: Number
});

var CustomerSchema = new mongoose.Schema({
	customerName: String,
	dateSignUp: {
		type: Date,
		default: new Date()
	},
});


var OrderSchema = new mongoose.Schema({
	customer: String,
	productName: String,
	productQty: Number,
	dateOrder: {
		type: Date,
		default: new Date()
	}
});



mongoose.model('Product', ProductSchema);
mongoose.model('Customer', CustomerSchema);
mongoose.model('Order', OrderSchema);

