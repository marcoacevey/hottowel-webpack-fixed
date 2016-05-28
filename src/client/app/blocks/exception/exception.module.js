(function () {
    'use strict';

    var exceptionModule = angular.module('blocks.exception', [
        require('../logger/logger.module').name
    ]);

    exceptionModule.config(require('./exception-handler.config'));
    exceptionModule.provider('exceptionHandler', require('./exception-handler.provider'));
    exceptionModule.factory('exception', require('./exception'));

    module.exports = exceptionModule;
})();
