var mongoose = require('mongoose');
var Product = mongoose.model('Product');


module.exports = (function() {
	var obj = {};

	obj.show = (function(req, res) {
		Product.find({}, function(err, results){
			if(err) {
				console.log(err,'Error in back_end_product_controller');
			} else {
				res.json(results);
			}
		})
	})

	obj.add = (function(req,res) {
	    var new_product = new Product({product: req.body.product, description: req.body.description, imageURL: req.body.imageURL, qty: req.body.qty});
	    new_product.save(function(err) {
	    	if(err){
	        	console.log("something went wrong in trying to add product");
	    	} else {
	        	res.json(true);
	    	}
		})
    })

 //    obj.remove = (function(req, res) {
	// 	Friend.remove({_id: req.body._id}, function(err, results){
	// 		if(err) {
	// 			console.log(err);
	// 		} else {
	// 			res.json(results);
	// 		}
	// 	})
	// })

	return obj;
})();