# Monster Muncher
The src folder is where all the fun, game stuff happens.

## Table of Contents
* Dev Notes and Known Issues
* Set Up for Developement
* Players and Units
* Game Mechanics

## Dev Notes and Known Issues
~~(04/08/2014) - There is an issue when monster data does not load in from the beastiary.json file on occasion.~~

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
Once you're finished with the initial set up, download the repository and make your way into the client folder via your terminal:

* Install Grunt plugins:
`$ npm install`
* Execute the following command to build the app:
`$ grunt`
* Start the server using the following command:
`$ node src/app.js`
* Hit up your localhost (http://localhost:8998 in this case) and wonder and marvel at what you see (or don't in these early stages)
* use `grunt watch` in a seperate terminal window for easy SASS compiling!

## Parties

### Enemy Party
### Enemy
Monsters (for lack of a better term right now) are what The Player will be fighting and eating throughout their adventures. 

Each Monster will have the following base properties:

* ID: Their placement number in the Beastiary. Used primarily for easy reference for fetching

* Name: What you call them, silly

* Image: Eventually will add cool portraits for each Enemy Unit to represent them in party view and in battle screens

* Family:
    - Biorganic: Squishy meat bags
    - Technological: Machine-like creatures and a good source of iron
    - Supernatural: Ghosts n' stuff

* Class: (determines their stats)
    - Balance: All around guy, nothing too scary
    - Aggressor: High attack but does not excel in much else 
    - Stoic: Plenty of health and defense but slow
    - Swift: Quick to attack and dodge but have low health
    
* Description: Descriptive text for each Hostile Unit's backstory

* Stats: (may change in the future)
    - HealthPoints: Affects health
    - POWer: Affects physical/skill attack power
    - DEFense: Affects defense and dodge rating
    - AGIlity: Affects attack speed and critical rating

The Enemy model:
```
    id: (int)
    name: (string)
    image: (img)
    family: (Biorganic | Technological | Supernatural)
    class: (Balance | Agressor | Stoic | Swift)
    description: (string)
    stats:
      HP: (int)
      POW: (int)
      DEF: (int)
      AGI: (int)
```

#### The Player Character
The Player is you. You are the player. This little guy doesn't start out as much, that's why it's up to you to help him become the biggest and baddest he can!

The player model is similar to the typical enemy model with some exceptions. Firstly, the player does not have a class. Secondly, in addition to the basic three families, the player will be able to attain combinations of 2 families through fighting/eating different eneimes. These combination families are still in the works, so for now, let your imagination run wild.

The Player model:
```
    id: 00
    name: (string)
    image: (img)
    family: (Biorganic | Technological | Supernatural)
    description: (string)
    stats:
      HP: (int)
      POW: (int)
      DEF: (int)
      AGI: (int)
```

## Gameplay Mechanics
### Exploration
#####_(to be implemented)_
### Combat Phase
#####_(to be implemented)_
### Eating and Evolution
#####_(to be implemented)_
