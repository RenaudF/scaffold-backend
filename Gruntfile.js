'use strict';

module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		// Metadata.
		mochaTest: {
			unit: {
				options: {
					reporter: 'spec',
					require: function(){
						var chai = require('chai');
						var chaiAsPromised = require('chai-as-promised');
						chai.use(chaiAsPromised);

						/* exported assert, expect */
						var assert = chai.assert; //jshint ignore:line
						var expect = chai.expect; //jshint ignore:line
						chai.should();
					}
				},
				src: ['test/**/*.js']
			}
		},
		jshint: {
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			app: {
				options: {
					jshintrc: 'app/.jshintrc'
				},
				src: ['app/**/*.js']
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			}
		},
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			frontend_app: {
				files: ['app/**/*.js'],
				tasks: ['jshint:app', 'mochaTest:unit']
			},
			frontend_test: {
				files: ['test/**/*.js'],
				tasks: ['jshint:test', 'mochaTest:unit']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha-test');

	// Default task.
	grunt.registerTask('default', ['jshint', 'mochaTest:unit']);
	grunt.registerTask('test', ['mochaTest:unit']);
};
