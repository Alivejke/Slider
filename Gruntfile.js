module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-haml2html');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: 'localhost',
                    base: '../web/'
                }
            }
        },

        haml: {                         
            dist: {                      
              files: {                         
                '../web/index.html': 'index.haml' 
              }
            }
        },

        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: './sass/',
                src: ['*.sass'],
                dest: '../web/css',
                ext: '.css'
              }]
            }
        },

        coffee: {
            compile: {
                files: [{
                  expand: true,
                  cwd: "./coffee/",
                  src: ["*.coffee"],
                  dest: "../web/js",
                  ext: ".js"
                }]
            },
            build: {
                expand: true,
                cwd: 'source',
                src: [ './coffee/*.coffee' ],
                dest: 'build',
                ext: '.js'
            }
        },

        copy: {
            html: {
                expand: true,
                cwd: '',
                src: './*.html',
                dest: '../web/'
            },
            bower: {
                expand: true,
                cwd: '',
                src: 'bower_components/**/{,*/}*',
                dest: '../web/'
            },
            img: {
                expand: true,
                cwd: 'img/',
                src: '**/*',
                dest: '../web/img/'
            },
            fonts: {
                expand: true,
                cwd: 'fonts/',
                src: '*',
                dest: '../web/fonts/'
            },
            jsvendor: {
                expand: true,
                cwd: 'vendor',
                src: '**/*',
                dest: '../web/vendor'
            },
            json: {
                expand: true,
                cwd: 'json/',
                src: '*',
                dest: '../web/json'
            }
        },

        watch: {
            options: {
                livereload: true
            },

            haml: {
                files: ['./*.haml'],
                tasks: ['haml'],
                options: {
                    interrupt: true
                }
            },
            sass: {
                files: ['./sass/**/*.sass'],
                tasks: ['sass'],
                options: {
                    interrupt: true
                }
            },

            coffee: {
                files: './coffee/*.coffee',
                tasks: ['coffee']
            },

            img: {
                files: ['img/*'],
                tasks: ['copy:img'],
                options: {
                    interrupt: true
                }
            },

            vendor: {
                files: ['vendor/**/*'],
                tasks: ['copy:jsvendor'],
                options: {
                    interrupt: true
                }
            },

            fonts: {
                files: ['fonts/*'],
                tasks: ['copy:fonts'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.registerTask('default', ['copy','connect', 'watch']);

};
