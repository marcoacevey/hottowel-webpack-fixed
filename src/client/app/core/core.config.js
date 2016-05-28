(function () {
    'use strict';

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, config) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({ docTitle: config.appTitle + ': ' });
    }

    module.exports = {
        toastrConfig: toastrConfig,
        configure: configure
    };
})();
