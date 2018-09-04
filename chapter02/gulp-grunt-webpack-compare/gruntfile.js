module.exports = function (grunt) {
  grunt.initConfig({
    sass: { // 编译 SASS 任务
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/styles.css': 'src/styles.scss',
        }
      }
    },
    cssmin: {  // 压缩 CSS 任务
      dist: {
        files: {
          'dist/css/styles.min.css': 'dist/css/styles.css'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['sass', 'cssmin']);
};
