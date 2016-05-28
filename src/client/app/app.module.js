(function () {
    'use strict';

    var angular = require('angular');
    require('bootstrap');
    require('bootstrap-css');
    require('bootstrap-theme-css');
    require('font-awesome');
    require('toastr');
    require('toastr-css');
    require('../styles/styles.less');

    var appModule = angular.module('app', [
        require('./core/core.module').name,
        require('./layout/layout.module').name,
        require('./widgets/widgets.module').name,
        require('oclazyload')
    ]);

    appModule.run(require('./dashboard/dashboard.route'));
    appModule.run(require('./admin/admin.route'));

    module.exports = appModule;
})();
