(function () {
    'use strict';

    var widgetsModule = angular.module('app.widgets', []);

    widgetsModule.directive('htImgPerson', require('./ht-img-person.directive'));
    widgetsModule.directive('htWidgetHeader', require('./ht-widget-header.directive'));

    module.exports = widgetsModule;
})();
