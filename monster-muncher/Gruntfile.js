module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'gruntfile.js',
        'src/js/*.js',
        'test/**/*.js'
      ]
    },

    compass: {
      dev: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'src/stylesheets',
          imagesDir: 'src/img',
          javascriptsDir: 'src/js',
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
        files: 'src/sass/**/*',
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