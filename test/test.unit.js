'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var assert = chai.assert;
var expect = chai.expect;
chai.should();

describe('Testing environment', function(){
	it('should work with the "assert" syntax', function(done){
		assert.eventually.equal(require('../app/module'), 'async module').notify(done);
	});
	it('should work with the "expect" syntax', function(done) {
		expect(require('../app/module')).to.eventually.equal('async module').notify(done);
	});
	it('should work with the "should" syntax', function(done){
		require('../app/module').should.eventually.equal('async module').notify(done);
	});
});