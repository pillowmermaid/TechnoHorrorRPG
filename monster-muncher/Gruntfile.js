module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'gruntfile.js',
        'src/media/js/*.js',
        'test/**/*.js'
      ]
    },

    compass: {
      dev: {
        options: {
          sassDir: 'src/media/sass',
          cssDir: 'src/media/stylesheets',
          imagesDir: 'src/media/img',
          javascriptsDir: 'src/media/js',
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
        files: 'src/media/sass/**/*',
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