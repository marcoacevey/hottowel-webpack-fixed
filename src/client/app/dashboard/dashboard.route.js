(function () {
    'use strict';

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateProvider: require('ron-html-lazy!./dashboard.html'),
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    resolve: {
                        loadDashboardModule: require('ron-module-lazy!./dashboard.module')
                    },
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    module.exports = appRun;
})();
