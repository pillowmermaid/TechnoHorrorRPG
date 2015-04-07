define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'parties/player/tummy/Tummy',
        'parties/player/tummy/FoodView',
        'parties/player/tummy/Food'
    ],
    function(Backbone, _, Handlebars, Tummy, FoodView, Food) {
        'use strict';
        var TummyView = Backbone.View.extend({
            el: '#player-tummy',

            initialize: function(){
                this.collection = new Tummy();
            },

            ingest: function(enemy){
                var food = new Food({
                    img: enemy.get('digested'),
                    group: enemy.get('class'),
                    stats: enemy.get('stats'),
                });
                this.collection.add(food);
                var foodView = new FoodView({model:food});
                this.$el.append(foodView.render().el);
            }

        });
        return TummyView;
    } 
);

