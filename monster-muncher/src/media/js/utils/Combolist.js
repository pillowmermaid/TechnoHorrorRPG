define(
    [
        'underscore'
    ],
    function(_) {
        'use strict';
        var Combolist = {
            sortem: function(foods){
                switch(foods.length){
                    case 4:
                        return this.mixem(foods);
                        break;
                    default:
                        return this.healem(foods.length);
                        break;
                }
            },

            healem: function(hp){
                return hp
            },

            mixem: function(monsters){
                console.log(monsters);
            }
        };
        return Combolist;
    }
);
