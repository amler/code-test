module.exports = function(grunt) {

	// Init
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			html: {
				options: {
					flatten: true
				},
				files: {
					'build/index.html': 'src/index.html'
				}
			},
			images: {
				expand: true,
				cwd: 'src/assets/img',
				src: '**',
				dest: 'build/assets/img',
				filter: 'isFile'
			}
		},
		jshint: {
			options: {
				browser: true,
				globals: {
					jQuery: true
				}
			},
			all: [
				'Gruntfile.js',
				'src/assets/js/*.js',
				'src/assets/js/**/*.js'
			]
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'build/assets/css/screen.css': 'src/assets/scss/screen.scss'
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'build/assets/js/main.js': [
						'src/assets/js/main.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: [
					'src/assets/scss/*.scss',
					'src/assets/scss/**/*.scss'
				],
				tasks: ['sass']
			},
			html: {
				files: [
					'src/index.html'
				],
				tasks: ['copy:html']
			},
			js: {
				files: [
					'src/assets/js/*.js',
					'src/assets/js/**/*.js'
				],
				tasks: ['javascript']
			}
		}
	});

	// Custom Tasks
	grunt.task.registerTask('setup', 'Refreshes build directory for a new build process.', function() {
		grunt.file.delete('build');
		grunt.file.mkdir('build');
	});

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Tasks
	grunt.registerTask('javascript', ['jshint', 'uglify']);
	grunt.registerTask('build', ['setup', 'javascript', 'sass', 'copy']);
	grunt.registerTask('default', ['build']);
	
};