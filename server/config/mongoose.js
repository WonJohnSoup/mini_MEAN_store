var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/Responsive_MEAN_store');
var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }



// //Pulling images from harddrive folder directly
// var fs=require('fs'),
// 	EventEmitter=require('events').EventEmitter,
// 	filesEE=new EventEmitter(),
// 	myfiles=[];

// 	// this event will be called when all files have been added to myfiles
// 	filesEE.on('files_ready',function(){
// 			console.dir(myfiles);
// 	});

// 	// var esync = fs.existsSync('./public/static/pics')
// 	// console.log (esync);
// 	if (fs.existsSync('./client/lib/img')){

// 		// read all files from current directory
// 		fs.readdir('./client/lib/img',function(err,files){
// 			if(err) throw err;
// 			files.forEach(function(file){
// 				myfiles.push(file);
// 			});
// 			filesEE.emit('files_ready'); // trigge66*r files_ready event
// 		});
// 	}


})