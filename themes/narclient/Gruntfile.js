module.exports = function(grunt) {
  grunt.initConfig({

    // Run compass
    // All the parameters below replace config.rb.
   compass: {
      options: {
        watch: false,
        cssDir: 'static/css',
        sassDir: 'src/scss',
        imagesDir: 'images',
        javascriptsDir: 'static/js',
        fontsDir: 'static/fonts',
        httpPath: '/',
        relativeAssets: true,
        noLineComments: true,
        importPath: [
          'node_modules/bootstrap/scss',
          'node_modules/font-awesome/scss',
          'node_modules/font-awesome/scss'
        ],
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
        },
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'nested',
        },
      },
    },

    // Move our assets out of node_modules
    copy: {
      themes: {
        files: [
          { expand:true, cwd:'node_modules/highlight.js/styles/', src:'solarized-light.css', 
            rename: function(dest, src){ return "src/scss/_solarized-light.scss"; } }
        ],
      },
      modernizr: {
        files: [
          { expand:true, cwd:'node_modules/modernizr/bin', src:'modernizr',
            rename: function(dest, src){ return "static/js/modernizr.js"; } }
        ],
      },
      fonts: {
        files: [
          { expand:true, cwd:'node_modules/font-awesome/fonts/', src:'*', dest: 'static/fonts' }
        ],
      }
    },

    // Collect all our js into one script
    concat: {
        options: {
          separator: '\n;\n',
        },
        dist: {
          src: [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/tether/dist/js/tether.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'src/js/highlight.min.js',
            'src/js/app.js',
          ],
          dest: 'static/js/app.js',
        },
      },

    // This is for dev only. Makes use of livereload on file changes.
    watch: {
      options: {
        debounceDelay: 1000,
      },
      js: {
        files: ['src/js/app.js'],
        tasks: ['concat']
      },
      scss: {
        files: ['src/scss/*.scss'],
        tasks: ['compass:dev']
      }
    }
  });

  // Define the modules we need for these tasks:
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Here are our tasks 
  grunt.registerTask('default', [ 'build' ]);
  grunt.registerTask('build', [ 'copy', 'compass:dev', 'concat']);
  grunt.registerTask('dev', [ 'watch' ]);

};