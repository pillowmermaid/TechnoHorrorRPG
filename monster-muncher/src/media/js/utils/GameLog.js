define(
    [
        'backbone',
        'underscore',
        'handlebars',
    ],
    function(Backbone, _, Handlebars) {
        'use strict';
        var GameLog = Backbone.View.extend({

            message: function(msg){
                $('#gamelog').html('<p>'+msg+'</p>');
            },

            enemyMessage: function(msg){

            },

            playerDamage: function(msg){
                
            },

            playerMessage: function(msg){

            }

        });
        return new GameLog;
    }
);