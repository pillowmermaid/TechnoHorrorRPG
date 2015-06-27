define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'utils/GameLog',
        'utils/Combolist',
        'playerMenu/player/tummy/Tummy',
        'playerMenu/player/tummy/FoodView',
        'playerMenu/player/tummy/Food'
    ],
    function(Backbone, _, Handlebars, GameLog, Combolist, Tummy, FoodView, Food) {
        'use strict';
        var TummyView = Backbone.View.extend({
            el: '#player-tummy',

            initialize: function(){
                this.collection = new Tummy();
                this.views = [];
            },

            render: function(){
                this.$el.html('');
                if(this.views.length > 0){
                    _.each(this.views, function(food){
                        $('#player-tummy').append(food.render().el);
                    }, this);
                }
                return this;
            },

            digest: function(){
                if(this.collection.length <= 0){
                    GameLog.message('But I haven\'t eaten anything!');
                }
                else{
                    return Combolist.sortem(this.views);
                }
            },

            flush: function(){
                var me = this;
                _.each(this.collection, function(){
                    me.poop();
                }, this);
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

