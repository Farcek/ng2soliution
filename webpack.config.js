var server = require('./server/webpack.config.js');
var client = require('./client/webpack.config.js');



module.exports = [server(), client()];
//module.exports = [client()];
//module.exports = [server()];