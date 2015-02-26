/*
Utilities file which handles all the internal party/unit logistics such as:
Picking random units from the beastiary.
Initializing the unit stats 
*/

define(
    [
        'backbone'
    ],
    function(Backbone) {
        'use strict';

        return {
            createParty: function(target, source){
                var idArray = source.pluck('_id');
                for(var i=0; i < 2; i++){
                    var monsterPicker = Math.floor(Math.random()*3);
                    console.log(monsterPicker);
                    var newMonster = source.at(monsterPicker).clone();
                    this.unitInit(newMonster);
                    target.add(newMonster);
                }
                console.log("Enemy Party: ", target);
            },

            unitInit: function(unit){
                this.setHP(unit);
                this.setSTR(unit);
                this.setDEF(unit);
                this.setAGI(unit);
            },
    
            setHP: function(unit){
                var oldHP = unit.get('stats').HP;
                var newHP = _.clone(unit.get('stats'));
                var modHP = Math.floor(Math.random()*3+1);
                newHP.HP = oldHP * modHP;
                unit.set('stats', newHP);
            },
    
            setSTR: function(unit){
                var oldSTR = unit.get('stats').STR;
                var newSTR = _.clone(unit.get('stats'));
                var modSTR = Math.floor(Math.random()*3+1);
                newSTR.STR = oldSTR * modSTR;
                unit.set('stats', newSTR);
            },
    
            setDEF: function(unit){
                var oldDEF = unit.get('stats').DEF;
                var newDEF = _.clone(unit.get('stats'));
                var modDEF = Math.floor(Math.random()*3+1);
                newDEF.DEF = oldDEF * modDEF;
                unit.set('stats', newDEF);
            },
    
            setAGI: function(unit){
                var oldAGI = unit.get('stats').AGI;
                var newAGI = _.clone(unit.get('stats'));
                var modAGI = Math.floor(Math.random()*3+1);
                newAGI.AGI = oldAGI * modAGI;
                unit.set('stats', newAGI);
            }
        };
    }
);