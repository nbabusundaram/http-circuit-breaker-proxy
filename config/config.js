var path = require('path');
var rootpath = path.normalize(__dirname+'../../../');

module.exports = {
    development:{
    	name:'Enterprise Proxy Service',
    	startupMessage:" Enterprise Proxy Service started successfully",
        rootpath:rootpath,
        addressapiurl:'http://localhost:7000/',
        proxy_service_port:9000
    },
    production:{
    name:'Enterprise Proxy Service',
        startupMessage:" Enterprise Proxy Service started successfully",
        rootpath:rootpath,
        addressapiurl:'http://localhost:7000',
        proxy_service_port:9000
    }
}
