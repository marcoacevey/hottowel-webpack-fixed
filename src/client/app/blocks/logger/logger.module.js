(function () {
    'use strict';

    var loggerModule = angular.module('blocks.logger', []);
    loggerModule.factory('logger', require('./logger'));

    module.exports = loggerModule;
})();
