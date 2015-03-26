# Monster Muncher 

This is a monster fighter with RPG elements built with Backbone and Require. The main mechanic is defeating and eating different types of monsters in order to grow yourself into a bigger, badder monster. Your diet is important, as different combinations of monsters will turn you into different things! The idea for look of the game revolves around technological spooky stuff not unlike what you see out of DOOM or H.R. Giger. And ghosts. Don't forget ghosts.

You are lowly, basic monster. You are not special. You are infact so devoid of any distinguishing characteristics that you can absorb the traits of other much cooler monsters to grow into a much cooler you. Alright I guess that's kind of special. 

## Set Up for Developement

### Prerequisites
You'll want the following tools installed before you start:

* Install [Node.js](http://nodejs.org/).
* Install [Grunt](https://github.com/gruntjs/grunt/wiki/Getting-started).
`$ npm install -g grunt-cli`
* Install [Ruby](http://rubyinstaller.org/downloads/). (required for compass/sass)
* Install [Compass](http://compass-style.org/install/) (used for CSS authoring).
`$ gem install compass`

### Getting Started
Once you're finished with the initial set up, download the repository and make your way into the monster-muncher folder via your terminal:

* Install Grunt plugins:
`$ npm install`
* Execute the following command to build the app:
`$ grunt`
* Start the server using the following command:
`$ node src/app.js`
* Hit up your localhost (http://localhost:8998 in this case) and wonder and marvel at what you see (or don't in these early stages)
* use `grunt watch` in a seperate terminal window for easy SASS compiling!


## Todo List

* Battle System
* Enemy Class Development
* Evolution Tree
* World Map and Exploration
* A bloody title
