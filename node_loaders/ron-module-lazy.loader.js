module.exports = function (content) {
    this.cacheable && this.cacheable();
    var fileToBundle = this.resource.replace(this.context, '').replace('\\', '/');
    return ['module.exports = [\'$q\', \'$ocLazyLoad\', function ($q, $ocLazyLoad) {',
        'var deferred = $q.defer();',
        'require.ensure([], function (require) {',
        'var mod = require(\'.', fileToBundle, '\');',
        '$ocLazyLoad.load({',
        'name: mod.name',
        '});',
        'deferred.resolve(mod.controller);',
        '});',
        'return deferred.promise;',
        '}];'].join('');
};

module.exports.raw = true;