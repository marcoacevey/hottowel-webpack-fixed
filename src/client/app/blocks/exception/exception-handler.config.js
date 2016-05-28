(function () {
    'use strict'
    /* @ngInject */
    function exceptionHandlerConfig($provide) {
        $provide.decorator('$exceptionHandler', require('./exception-handler.decorator'));
    };

    module.exports = exceptionHandlerConfig;
}
)();