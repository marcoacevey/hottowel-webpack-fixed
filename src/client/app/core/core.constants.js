/* global toastr:false, moment:false */
(function () {
    'use strict';

    module.exports = function (ngModule) {
        ngModule
            .constant('toastr', require('toastr'))
            .constant('moment', require('moment'));
        /*
        .constant('toastr', toastr)
        .constant('moment', moment);
        */
    };
})();
