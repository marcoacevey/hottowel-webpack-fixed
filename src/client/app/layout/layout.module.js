(function () {
    'use strict';

    require('!ngtemplate?module=app.core&relativeTo=/client/!html!./shell.html');
    require('!ngtemplate?module=app.core&relativeTo=/client/!html!./sidebar.html');

    var layoutModule = angular.module('app.layout', [
        require('../core/core.module').name
    ]);

    layoutModule.controller('SidebarController', require('./sidebar.controller'));
    layoutModule.controller('ShellController', require('./shell.controller'));

    layoutModule.directive('htTopNav', require('./ht-top-nav.directive'));
    layoutModule.directive('htSidebar', require('./ht-sidebar.directive'));

    module.exports = layoutModule;
})();
