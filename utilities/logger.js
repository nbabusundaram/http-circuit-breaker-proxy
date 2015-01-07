var bunyan      = require('bunyan');
var bunyanTcp   = require('bunyan-logstash-tcp');

var logger = bunyan.createLogger({
    name: 'NodeLogger',
    serializers: bunyan.stdSerializers,
    streams: [
        {
            level: 'debug',
            type: 'raw',
            stream: (bunyanTcp.createStream({
                host: 'nbabu-ubundu',
                port: 9998,
                max_connect_retries: -1, // Don't give up on reconnecting
                retry_interval: 1000     // Wait 1s between reconnect attempts
            }))
        }
]});


module.exports = logger;