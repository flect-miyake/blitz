/*
  Gulp config
*/

// Development directory
var src = './src';

// Testing code directory
var test = './test';

// Distribution directory
var dest = './dist';


module.exports = {

  clean: {
    target: dest
  },
  htdocs: {
    src: [src + '/htdocs/**/*.html', '!' + src + '/templates/**/*.html'],
    dest: dest
  },
  javascripts: {
    src: src + '/javascripts/**/*.js',
    dest: dest + '/javascripts',
    outputName: 'app.js'
  },
  templates: {
    src: src + '/templates/**/*.html',
    dest: dest + '/javascripts',
    outputName: 'templates.js'
  },
  config: {
    src: src + '/config.json',
    dest: dest + '/javascripts',
    moduleName: 'config'
  },
  stylesheets: {
    src: [src + '/sass/**/*.{sass,scss}', '!' + src + '/sass/lds.sass'],
    dest: dest + '/stylesheets'
  },
  images: {
    src: src + '/images/**/*',
    dest: dest + '/images'
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + '/fonts'
  },
  lds: {
    assets: {
      src: src + '/lds/assets/**/*',
      dest: dest + '/lds/assets'
    },
    scss: {
      src: src + '/sass/lds.sass',
      dest: dest + '/stylesheets'
    }
  },

  _browserSync: {
    target: dest + '/**/*',
    options: {
      server: {
        baseDir: dest
      }
    }
  },
  _sass: {
    options: {
      indentedSyntax: true, // Enable .sass syntax!
    }
  },
  _autoprefixer: {
    options: {
      browsers: ['last 2 version']
    }
  },
  _minifyCss: {
    options: {
      keepBreaks: true
    }
  },
  _bower: {
    dest: dest + '/lib'
  }

};
