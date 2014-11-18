'use strict';

var myModule = require('./module.js');

myModule.then(function(){
	console.log('module loaded!');
});