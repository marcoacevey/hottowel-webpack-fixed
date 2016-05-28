module.exports = function (content) {
    this.cacheable && this.cacheable();
    var fileToBundle = this.resource.replace(this.context, '').replace('\\', '/');
    return ['module.exports = [\'$q\', function ($q) {',
        'var deferred = $q.defer();',
        'require.ensure([], function (require) {',
        'var template = require(\'.', fileToBundle, '\');',
        'deferred.resolve(template);',
        '});',
        'return deferred.promise;',
        '}];'].join('');
};

module.exports.raw = true;