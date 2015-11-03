var products = require('../back_end_controllers/back_end_product_controller.js');
var customers = require('../back_end_controllers/back_end_customer_controller.js');
var orders = require('../back_end_controllers/back_end_order_controller.js');

module.exports = function(app) {
	//products
	app.get('/products', function(req, res) {
		products.show(req, res);
	})

	app.post('/addProduct', function(req, res) {
		products.add(req, res);
	})

	app.post('/delProduct', function(req, res) {
		products.remove(req, res);
	})

	//customers
	app.get('/customers', function(req, res) {
		customers.show(req, res);
	})

	app.post('/addCustomer', function(req, res) {
		customers.add(req, res);
	})

	app.post('/delCustomers', function(req, res) {
		customers.remove(req, res);
	})

	//orders
	app.get('/orders', function(req, res) {
		orders.show(req, res);
	})

	app.post('/addOrder', function(req, res) {
		orders.add(req, res);
	})

	app.post('/delOrder', function(req, res) {
		orders.remove(req, res);
	})
};