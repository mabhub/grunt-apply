# grunt-apply

> Execute linked scripts and save output

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apply --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apply');
```

## The "apply" task

### Overview
In your project's Gruntfile, add a section named `apply` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  apply: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```
<!-- 

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

 -->

### Usage Examples

```js
grunt.initConfig({
  apply: {
    options: {
    },
    your_target: {
      files:[{
        expand: true,
        cwd: 'src/html',
        src: ['**/*.html'],
        dest: 'dist/'
      }],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
