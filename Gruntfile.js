module.exports= function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
  		concat: {
   		 	options: {
      			separator: ';'
   			},
    		dist: {
      			src: ['css/print.css', 'css/style.css'],
      			dest: 'build/style.css'
    		}
 		},
 		// Minify all contents of a build directory and add a .min.css extension
 		cssmin: {
 			target: {
    			files: [{
      				expand: true,
      				cwd: 'build',
      				src: ['*.css', '!*.min.css'],
      				dest: 'build',
      				ext: '.min.css'
    			}]
  			}
		},

		htmlmin: {                                     // Task 
    		dist: {                                      // Target 
      			options: {                                 // Target options 
        			removeComments: true,
        			collapseWhitespace: true
      			},
      			files: {                                   // Dictionary of files 
        		'build/index.html': 'index.html'     // 'destination': 'source' 
        		// 'dist/contact.html': 'src/contact.html' if you want to add another file
      			}
    		},
    		// dev: {                                       // Another target 
      // 			files: {
      //   			'build/index.html': 'index.html',
      //   			'/contact.html': 'src/contact.html'
      // 			}
    		// }
  		},

  		 uglify: {
    		my_target: {
      			files: {
        			'build/main.min.js': ['js/perfmatters.js'] //'destination': 'source' 
      			}
    		}
  		},
  		// Watches for all js files for to run the task jshint if they are changed
		watch: {
  			scripts: {
    			files: ['js/*.js'],
    			tasks: ['uglify'],
    				options: {
      				spawn: false,
    				}
  			},
  			css: {
    			files: ['css/*.css'],
    			tasks: ['concat','cssmin'],
    				options: {
      				spawn: false,
    				}
  			},
  			html: {
    			files: ['index.html'],
    			tasks: ['htmlmin'],
    				options: {
      				spawn: false,
    				}
  			}  			  			
		}	
	});
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['concat', 'htmlmin', 'cssmin', 'uglify', 'watch']);
};
