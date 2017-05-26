module.exports = function(shipit) {
    shipit.initConfig({
        staging: {
            servers: 'bytemn@test.byte.mn',
            workspace: '/home/bytemn/test1',
            branch: 'dev',
            key: "C:\\Users\\Administrator\\.ssh\\id_rsa.ppk"
                //
        }
    });

    shipit.task('pwd', function() {
        return shipit.remote('pwd');
    });
};