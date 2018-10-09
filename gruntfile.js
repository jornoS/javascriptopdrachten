module.exports = function(grunt) {
  const sass = require('node-sass');
  
  grunt.initConfig({
      sass: {
          options: {
              implementation: sass,
              sourceMap: true
          },
          dist: {
              files: {
                  'adressbook/css/adresbook.css': 'adressbook/sass/adresbook.scss'
              },
          },
      },
      watch: {
          scripts: {
              files: ['adressbook/sass/*.scss'],
              tasks: ['sass'],
              options: {
                  spawn: true,
              },
          },

        },
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);

};