var restify = require('restify');


module.exports = function(config,db,logger)
{

var app =  restify.createServer(
{
name : config.name
}
);
app.db = db;
app.logger = logger;

return app;


}