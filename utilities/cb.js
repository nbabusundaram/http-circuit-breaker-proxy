var CircuitBreaker = require('promise-circuitbreaker'),
    RequestCircuitBreaker = CircuitBreaker.RequestCircuitBreaker,
    TimeoutError = CircuitBreaker.TimeoutError,
    OpenCircuitError = CircuitBreaker.OpenCircuitError;


var isError = function(error, response, body) {
    if (error) return error;
    if (response.statusCode == 503) {
        var unavailableError = new Error();
        unavailableError.name = "ServiceUnavailableError";
        return unavailableError;
    }
    return null;
};

var cb = new RequestCircuitBreaker({
    isErrorHandler: isError,
    errorThreshold: 0.1, // allow 10% error rate
    errorNamesThresholds: {
        ServiceUnavailableError: 0 // but close circuit on first unavailable error
    }
}).setTimeout(9000);


var proxier = function(logger)
{

    this.logger = logger;
}


proxier.process = function(req,res,logger)
{
cb.exec({url: req.serviceurl, json: true})
.spread(function(response, page) {
console.log('Success: served properly');
    
logger.info('Success: served properly');
    res.send(page);
}).catch(TimeoutError, function(error) {
    
logger.info('Timeout!' + error);
console.log("Timeout!", error);
    res.send('Some Error, sorry about that.')
}).catch(OpenCircuitError, function(error) {
    logger.info('Circuit is open!');
    console.log("Circuit is open!");
    res.send('Some Error, sorry about that.')
}).catch(function(error) {
    logger.info('Other Error');
    console.log("Other error");
    res.send('Some Error, sorry about that.')
}).finally(function() {
    cb.stopEvents();
});

}

module.exports = proxier;
