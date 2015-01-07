module.exports = function(app) {

app.get('/cb/.*', function(req,res,next)
{
req.serviceurl = app.config.addressapiurl + req.requestUrl;
app.cb.process(req,res,app.logger)




});


}
