define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'parties/playerParty/FoodView'
    ],
    function(Backbone, _, Handlebars, FoodView) {
        'use strict';
        var PlayerTummyView = Backbone.View.extend({
            el: '#player-tummy',

            initialize: function(){
                this.render();
            },

            render: function(){
                this.$el.html('Hi');
                return this;
            },

        });
        return PlayerTummyView;
    } 
);

