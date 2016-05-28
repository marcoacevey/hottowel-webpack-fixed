(function () {
    'use strict';

    var adminModule = angular.module('app.admin', []);

    adminModule.controller('AdminController', require('./admin.controller'));

    module.exports = adminModule;
})();
