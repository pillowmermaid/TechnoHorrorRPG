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
                $('#gamelog').append('<p>'+msg+'</p>');
            }

        });
        return new GameLog;
    }
);