(function () {
    'use strict';
    
    var routerModule = angular.module('blocks.router', [
        require('angular-ui-router'),
        require('../logger/logger.module').name
    ]);

    routerModule.provider('routerHelper', require('./router-helper.provider'));

    module.exports = routerModule;
})();
