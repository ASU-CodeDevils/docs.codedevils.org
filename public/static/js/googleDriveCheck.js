(function () {
    let driveAccessible = true;     // will be changed to false if
    const logoSource = 'https://drive.google.com/uc?id=1dfSKTkPgHFAvW8RiIFludY6hstSshDHH';
    const failedMessage = 'Failed to connect to Google Drive. The network you are on may be blocking it. Some files/images may not be shown.';

    function init() {
        // check connection to google drive
        let image = new Image();
        image.crossOrigin = 'no-cors';
        image.onerror = () => {
            console.log(failedMessage);
            driveAccessible = false;
        };
        image.src = logoSource;     // any logo on the drive will do
    }

    function before(content) {
        init();
        if(!driveAccessible) {
            return '!> ' + failedMessage + '\n\n' + content;
        }
    }

    const driveCheck = function (hook) {
        hook.beforeEach(content => {
            return before(content);
        });
    };

    $docsify.plugins = [].concat(driveCheck, $docsify.plugins);

}());