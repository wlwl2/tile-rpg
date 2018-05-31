module.exports = function (grunt) {
  /* Do not prepend ./ to the paths- it will prevent newly added files
  to not be detected during grunt watch */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['style.scss'],
          dest: 'src/',
          ext: '.css',
          extDot: 'last'
        }]
      }
    },
    watch: {
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      }
    },
    open : {
      dev : {
        path: 'index.html',
        app: 'Chrome.exe'
      }
    }
  })

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-open')

  // Default task(s).
  grunt.registerTask('default', ['open', 'watch'])
}
