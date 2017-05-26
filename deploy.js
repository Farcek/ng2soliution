var path = require('path');
module.exports = {
    host: 'test.byte.mn',
    port: 22,
    username: 'bytemn',
    password: 'ftP0$$',
    serverRoot: '/home/bytemn/ng2',
    localRoot: path.join(__dirname, 'dist'),
    commands: {
        before: function(tool) {
            var clear = tool.remote('rm -rf *');
            var build = tool.local('cd ' + __dirname + ' && npm run build:prod');

            return [build, clear];
        },
        after: function(tool) {
            return tool.local('ping 127.0.0.1 -n 3');
        }
    }
};