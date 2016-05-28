(function () {
    'use strict';

    /* @ngInject */
    function htTopNav() {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '='
            },
            template: require('./ht-top-nav.html')
        };

        /* @ngInject */
        function TopNavController() {
            var vm = this;
        }

        return directive;
    }
    
    module.exports = htTopNav;
})();
