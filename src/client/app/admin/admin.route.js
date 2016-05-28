(function () {
    'use strict';

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'admin',
                config: {
                    url: '/admin',
                    templateProvider: require('ron-html-lazy!./admin.html'),
                    controller: 'AdminController',
                    controllerAs: 'vm',
                    resolve: {
                        loadAdminModule: require('ron-module-lazy!./admin.module')
                    },
                    title: 'Admin',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
    }

    module.exports = appRun;
})();
