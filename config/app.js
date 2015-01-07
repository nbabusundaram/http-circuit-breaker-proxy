var restify = require('restify');


module.exports = function(config,logger,cb)
{

var app =  restify.createServer(
{
name : config.name
}
);
app.logger = logger;

app.cb = cb;
app.config=config;

return app;


}