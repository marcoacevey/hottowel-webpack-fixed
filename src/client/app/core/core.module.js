/* global angular */
(function () {
    'use strict';

    require('angularplus');

    var coreModule = angular.module('app.core', [
        require('angular-animate'),
        require('angular-sanitize'),
        'ngplus',
        require('../blocks/router/router.module').name,
        require('../blocks/exception/exception.module').name
    ]);

    require('./core.constants')(coreModule);
    
    coreModule.constant('config', require('./core.constant'));
    coreModule.config(require('./core.config').toastrConfig);
    coreModule.config(require('./core.config').configure);
    coreModule.run(require('./core.route'));
    coreModule.factory('dataservice', require('./dataservice'));

    module.exports = coreModule;
})();
