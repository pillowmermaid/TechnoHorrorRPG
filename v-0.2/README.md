# TechnoHorror RPG Client

The client folder is where all the fun, game stuff happens. Player/Hostile Party as well as the battle system and other gameplay code will be found here.

## Table of Contents

* Dev Notes and Known Issues
* Set Up for Developement
* Players and Units
* Game Mechanics

## Dev Notes and Known Issues

(04/08/2014) - There is an issue when monster data does not load in from the beastiary.json file on occasion. 

## Set Up for Developement

### Prerequisites

You'll want the following tools installed before you start:

* Install [Node.js](http://nodejs.org/).
* Install [Grunt](https://github.com/gruntjs/grunt/wiki/Getting-started).
    $ npm install -g grunt-cli
* Install [Ruby](http://rubyinstaller.org/downloads/). (required for compass/sass)
* Install [Compass](http://compass-style.org/install/) (used for CSS authoring).
    $ gem install compass

### Getting Started

Once you're finished with the initial set up, download the repository and make your way into the client folder via your terminal:

* Install Grunt plugins:
    $ npm install
* Execute the following command to build Trader Desktop:
    $ grunt
* Start the server using the following command:
    $ node src/app.js
* http://localhost:8998](http://localhost:8998) and wonder and marvel at what you see (or don't in these early stages)

## Parties

### Player Party

This will house your active members when you enter the Combat Phase which includes your Player Character and (at the moment) one other Ally Unit.

Ally Units in the Player Party will be populated from Enemy Units encountered through the Combat Phase.

#### The Player Character
#####_(to be implemented)_

#### Allied Units

#### Reserve Party
#####_(to be implemented)_

The Reserve Party is where newly recruited Units are kept when not in the Player Party. The Player can access the Reserve Party via The Fortress (see The Fortress description in the SERVER README, under LOCATIONS). The Reserve Party (at this time) does not have a limit to how many Units can be stored

Accessing the Reserve Party allows the Player to:

* Swap active Ally Unit with any other Unit in the Reserve Party

* Release Ally Units from Player Party (if they give you lip or something) 

* Send reserved Ally Units on away missions (???)

* Do cool stuff (?????????????????)

### Hostile Parties

### Monsters/Creatures/Whatehaveyous

Monsters (for lack of a better term right now) are what The Player will be fighting and recruiting throughout their adventures. 

Each Monster will have the following base properties:

* ID: Their placement number in the Beastiary. Used primarily for easy reference for fetching.

* Name: What you call them, silly.

* Image: Eventually will add cool portraits for each Hostile Unit to represent them in party view and in battle screens

* Classs (subject to review for proper balancing):
    Balance: The jack of all trades.
    Agressor: High Attack but does not excel in much else.
    Stoic: Plenty of Health and Defense but slow.
    Swift: Quick to attack and dodge but have low Health.
    Psycher: Highly skillful in ranged attacks and spells but not formidable in close quarters 

* Description: Descriptive text for each Hostile Unit's backstory.

* Stats: 
    HealthPoints: Affects health
    POWer: Affects physical/skill attack power
    TEChnique: Affects ranged/spell power (to be added)
    DEFense: Affects defense and dodge rating
    AGIlity: Affects attack speed and critical rating

The model for each Monster should end up looking like this:

    id: int
    name: string
    image: img
    class: Balance | Agressor | Stoic | Swift | Psycher
    description: string
    stats:
      HP: int
      POW: int
      TEC: int
      DEF: int
      AGI: int

## Gameplay Mechanics
### Exploration
#####_(to be implemented)_
### The Fortress
#####_(to be implemented)_
#### Party Management
#### Away Missions
#### Sieges (????)
### Combat Phase
#####_(to be implemented)_
### Recruiting
#####_(to be implemented)_
