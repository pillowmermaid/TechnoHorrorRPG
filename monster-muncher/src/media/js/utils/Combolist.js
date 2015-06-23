define(
    [
        'backbone',
        'underscore'
    ],
    function(Backbone, _) {
        'use strict';
        var Combolist = {
            sortem: function(foods){
                switch(foods.length){
                    case 4:
                        this.mixem(foods);
                        break;
                    default:
                        return this.healem(foods.length);
                        break;
                }
            },

            healem: function(hp){
                console.log(hp);
                return hp
            },

            mixem: function(monsters){

            }
        };
        return Combolist;
    }
);
