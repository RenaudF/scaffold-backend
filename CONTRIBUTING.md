# Contributing

## Important notes
Please don't edit files in the `frontend/dist` subdirectory as they are generated via Grunt. You'll find source code in the `frontend/app` subdirectory!

### Code style
Regarding code style like indentation and whitespace, **follow the conventions you see used in the source already** (should be tabs in .js files, 2 spaces in .json). Do not commit commented out code. Write comments where appropriate.

## Modifying the code
First, ensure that you have the latest [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/) installed.

Test that Grunt's CLI is installed by running `grunt --version`.  If the command isn't found, run `npm install -g grunt-cli`.  For more information about installing Grunt, see the [getting started guide](http://gruntjs.com/getting-started). Also make sure you have [bower](https://github.com/bower/bower) installed too.

1. Fork and clone the repo.
2. Run `npm install` to install all dependencies (including Grunt).
3. Run `bower install` to install front end dependencies.
4. Run `grunt` to grunt this project.

Assuming that you don't see any red, you're ready to go. Just be sure to run `grunt` after making any changes, to ensure that nothing is broken.

## Submitting pull requests

1. Create a new branch, please don't work in your `master` branch directly.
2. Add failing tests for the change you want to make. Run `grunt` to see the tests fail.
3. Fix stuff.
4. Run `grunt` to see if the tests pass. Repeat steps 2-4 until done.
5. Update the documentation to reflect any changes.
6. Push to your fork and submit a pull request.
