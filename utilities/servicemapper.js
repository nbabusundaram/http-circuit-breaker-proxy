module.exports = function pathdeveloper(req,res,next)
{
var path = req.route.path;
var wildcard = req.url.split(path.substring(0, path.lastIndexOf('.')))[1];
req.requestUrl = wildcard;
next();
}