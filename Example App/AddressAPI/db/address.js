var mongoose = require('mongoose');


var db= function(config)
{

mongoose.connect(config.address_mongodb_url);

var db = mongoose.connection;
    db.on('error',console.error.bind(console,"connection error!"));
    db.once('open',function callback(){
        console.log("multivision is open...");
    });


}

db.Schema = mongoose.Schema
  , ObjectId = db.Schema.ObjectId;


db.AddressSchema = new db.Schema({
    id: ObjectId,
    isActive: String,
    picture: String,
    age: String,
    eyeColor: String,
    fullname: String,
    gender: String,
    company: String,
    email: String,
    phone: String,
    street1: String,
    buildingname: String,
    buildingno: String,
    town: String,
    city: String,
    postcode: String,
    registered: Date,
    latitude: String,
    longitude: String,
    favoriteFruit: String
});


db.AddressModel = mongoose.model('address', db.AddressSchema);


db.prototype.SearchAddress = function(req,res,next)
{

var callback = function(err, addresses) {
        if(!err && addresses) {
            res.send(addresses);
        }
        else {
            response.send('err');
        }
        return next();
    }


	var result = null;




		if(req.params.limit==undefined)
		{

			req.params.limit=5;
		}

		db.AddressModel
		.find({"postcode":req.params.postcode})
		.sort({'registered': -1})
		.limit(req.params.limit)
		.exec(function(err, posts) {
			if(err)
			{

				console.log(err);
			}
			else
			{

				callback(null,posts);
			}
		
		});

}









module.exports = db;








