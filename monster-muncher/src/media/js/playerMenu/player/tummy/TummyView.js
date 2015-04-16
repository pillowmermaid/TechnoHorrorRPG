define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'utils/GameLog',
        'playerMenu/player/tummy/Tummy',
        'playerMenu/player/tummy/FoodView',
        'playerMenu/player/tummy/Food'
    ],
    function(Backbone, _, Handlebars, GameLog, Tummy, FoodView, Food) {
        'use strict';
        var TummyView = Backbone.View.extend({
            el: '#player-tummy',

            initialize: function(){
                this.collection = new Tummy();
                this.views = [];
            },

            digest: function(){
                if(this.collection.length <= 0){
                    GameLog.message('But I haven\'t eaten anything!');
                }
                else{
                }
            },

            ingest: function(enemy){
                var food = new Food({
                    img: enemy.get('digested'),
                    group: enemy.get('class'),
                    stats: enemy.get('stats'),
                });
                this.collection.add(food);
                var foodView = new FoodView({model:food});
                this.views.push(foodView);
                $('#player-tummy').append(foodView.render().el);              
            },

            poop: function(){
                if(this.collection.length > 0){
                    var poopThis = this.views.shift();
                    poopThis.eject();
                }
                else{
                    GameLog.message('But I don\'t have to poop!');
                }
            }

        });
        return TummyView;
    } 
);

