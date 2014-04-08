module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'gruntfile.js',
        'src/client/js/views/*.js',
        'src/client/js/collections/*.js',
        'src/client/js/models/*.js',
        'src/client/js/routes/*.js',
        'src/*.js',
        'src/routes/*.js',
        'test/**/*.js'
      ]
    },

    compass: {
      dev: {
        options: {
          sassDir: 'src/client/sass',
          cssDir: 'src/client/stylesheets',
          imagesDir: 'src/client/img',
          javascriptsDir: 'src/client/js',
          noLineComments: false,
          environment: 'development'
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      jshint:{
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      compass: {
        files: 'src/client/sass/**/*',
        tasks: ['compass:dev'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.registerTask('test', ['jshint', 'mochaTest']);

  grunt.registerTask('default', ['test']);
};