
module.exports = function(app) {


app.get('/', function(req,res,next)
{
res.send('Address API Server running Successfully');

});

app.get('/address', function(req,res,next)
{
 app.logger.info('Call Received to Adddress API');
res.send('Address API Server running Successfully');

});


app.get('/address/:postcode/:limit',function(req,res,next)
	{
app.logger.info('Address requested for the Post code ' + req.params.postcode);

app.db.SearchAddress(req,res,next);

});


 



app.get('/address/:postcode',function(req,res,next)
	{
app.logger.info('Address requested for the Post code ' + req.params.postcode);
app.db.SearchAddress(req,res,next);

});






}


