'use strict';

module.exports = function(grunt) {

   // Project configuration.
    grunt.initConfig({
        watch: {
		  	css: {
	    		files: '**/*.css',
		    	tasks: ['test-task'],
				options: {
						livereload: true,
				},
		  	},
		},	
		'test-task': {
			test: {				
			}
		}	
    })

    grunt.registerMultiTask('test-task', 'test', function() {		
		console.log('task done');
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch:css']);
};
