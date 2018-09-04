grunt.initConfig({
  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'main.css': 'main.scss',
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['sass']);