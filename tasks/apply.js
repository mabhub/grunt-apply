/*
 * grunt-apply
 * https://github.com/bmarguin/grunt-apply
 *
 * Copyright (c) 2014 mab
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var async = require('async');
  var os    = require('os');
  var jsdom = require('jsdom');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('apply', 'Execute attached JS file attached to an html source', function() {
    var done  = this.async();
    var files = this.files
    var dest  = this.data.dest;

    async.eachLimit(files, os.cpus().length,
      /**
       * On each file :
       */
      function (file, next) {
        jsdom.env({
          file: file.src[0],
          features: {
            FetchExternalResources:   ['script', 'img'],
            ProcessExternalResources: ['script']
          },
          created: function (err, window) {
            /**
             * Inner console will be forward to local console
             */
            window.console = console;
          },
          loaded: function (err, window) {
            /**
             * Remove all <script> tags
             */
            [].forEach.call(window.document.querySelectorAll('script'), function (element) {
              element.parentNode.removeChild(element);
            });
          },
          done: function (err, window) {
            /**
             * Write file and done();
             */
            grunt.file.write(file.dest, jsdom.serializeDocument(window.document));
            process.nextTick(next);
          }
        });
      },
      /**
       * Finally
       */
      function (err) {
        if (err) {
          grunt.warn(err);
        }

        done();
      }
    );
  });
};
