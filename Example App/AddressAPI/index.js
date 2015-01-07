
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')[env];

var logger = require('./utilities/logger');


var addressdb =require('./db/address');

var db = new addressdb(config);

var app = require('./config/app')(config,db,logger);

require('./routes/address')(app);


app.listen(config.port, function()
{
console.log(config.startupMessage + ' on Port: ' + config.port);
}
);


