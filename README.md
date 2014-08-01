#Code Test


##Getting Started

In order to build this project's files you will need to have [npm](https://www.npmjs.org/) (the [Node.js](http://nodejs.org/) package manager), [Grunt](http://gruntjs.com/) and [Sass](http://sass-lang.com/). With that in mind, follow the following steps:

1. Install npm by downloading and installing the appropriate package from [Node.js's website](http://nodejs.org/download/).
2. Install Grunt by running `sudo npm install -g grunt-cli` or by following
[Grunt's installation instructions](http://gruntjs.com/getting-started).
3. Install Sass by running `sudo gem install sass` or by following [Sass's installation instructions](http://sass-lang.com/install).
4. After cloning the project's Git repository, run `npm install` on the cloned directory to install all of the project's Grunt dependencies.
5. Run `grunt build` to confirm that you can successfully build the project's files.

With all of the aforementioned dependencies installed, you're now ready to build this project's files.


##Grunt Tasks

* `grunt build` Creates a **build** directory, containing a fresh build of the project's files.
* `grunt watch` Watches when HTML, JavaScript or SCSS files are changed and updates HTML, JavaScript and CSS files within **build** directory. Press **Control + C** to stop watching files.

###Reviewer
* Wrote the Gruntfile.js from scratch rather than using Yeoman
* Wrote mixins utilizing sass rather than relying on Bourbon or Compass.