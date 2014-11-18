'use strict';

var Q = require('q');

var deferred = Q.defer();
setTimeout(function(){
	deferred.resolve('async module');
}, 100);

module.exports = deferred.promise;
