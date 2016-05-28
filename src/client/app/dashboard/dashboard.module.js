(function () {
    'use strict';

    var dashboardModule = angular.module('app.dashboard', []);

    dashboardModule.controller('DashboardController', require('./dashboard.controller'));

    module.exports = dashboardModule;
})();
