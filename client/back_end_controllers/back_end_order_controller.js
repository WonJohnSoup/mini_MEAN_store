var mongoose = require('mongoose');
var Order = mongoose.model('Order')


module.exports = (function() {
	var obj = {};

	obj.show = (function(req, res) {
		Order.find({}, function(err, results){
			if(err) {
				console.log(err,'Error in back_end_order_controller');
			} else {
				res.json(results);
			}
		})
	})

	obj.add = (function(req,res) {
	    var new_order = new Order({customer: req.body.customer, productName: req.body.productName, productQty: req.body.productQty, dateOrder: new Date()});
	    new_order.save(function(err) {
	    	if(err){
	        	console.log("something went wrong in trying to add order");
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