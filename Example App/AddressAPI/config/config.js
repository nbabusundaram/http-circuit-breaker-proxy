var path = require('path');
var rootpath = path.normalize(__dirname+'../../../');

module.exports = {
    development:{
    	name:'Enterprise API Service',
    	startupMessage:" Enterprise Address API Service started successfully",
        rootpath:rootpath,
        address_mongodb_url:'mongodb://tesco:tesco@ds052827.mongolab.com:52827/multivision',
        port:7000
    },
    production:{
    	name:'Enterprise API Service',
    	startupMessage:" Enterprise Address API Service started successfully",
        rootpath:rootpath,
        address_mongodb_url:'mongodb://tesco:tesco@ds052827.mongolab.com:52827/multivision',
        port:7000

    }
}
