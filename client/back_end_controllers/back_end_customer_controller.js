var mongoose = require('mongoose');
var Customer = mongoose.model('Customer')


module.exports = (function() {
	var obj = {};

	obj.show = (function(req, res) {
		Customer.find({}, function(err, results){
			if(err) {
				console.log(err,'Error in back_end_customer_controller');
			} else {
				res.json(results);
			}
		})
	})

	obj.add = (function(req,res) {
	    var new_customer = new Customer({customerName: req.body.name, Date: new Date()});
	    new_customer.save(function(err) {
	    	if(err){
	        	console.log("something went wrong in trying to add customer");
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