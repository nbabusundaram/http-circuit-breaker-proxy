var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var pathextractor = require('./utilities/path');
var logger = require('./utilities/logger');

var cb =require('./utilities/cb');
var cbproxy = new cb(logger);

var app = require('./config/app')(config,logger,cb);

app.use(pathextractor);

require('./routes/proxy')(app);


app.listen(config.proxy_service_port, function()
{
console.log(config.startupMessage + ' on Port: ' + config.proxy_service_port );
}
);


