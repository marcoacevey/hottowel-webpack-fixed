(function () {
    'use strict';

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    template: require('./404.html'),
                    title: '404'
                }
            }
        ];
    }

    module.exports = appRun;
})();
