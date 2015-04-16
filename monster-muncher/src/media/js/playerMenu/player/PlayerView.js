define(
    [
        'backbone',
        'handlebars',
        'gameStates/BattleState',
        'utils/GameLog',
        'playerMenu/player/Player',
        'playerMenu/player/tummy/TummyView',
        'text!playerMenu/player/PlayerTemplate.html'
    ],
    function(Backbone, Handlebars, BattleState, GameLog, Player, TummyView, PlayerTemplate){
        'use strict';
        var PlayerView = Backbone.View.extend({
            el: '#player-container',

            template: Handlebars.compile(PlayerTemplate),

            events:{
                'click #player-digest': 'digest',
                'click #player-poop': 'poop'
            },

            initialize: function(){
                this.spawn();
                this.on('hit', this.hit, this);
                this.on('eat', this.eat, this);
                this.on('levelUp', this.levelUp, this);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            dead: function(){
                GameLog.message('I\'m dead!');
                this.model.unbind()
                this.model.destroy();
                this.tummy.destroy();
                this.spawn();
            },

            digest: function(){
                this.tummy.digest();
            },

            eat: function(enemy){
                GameLog.message('I\'m eating '+enemy.model.get('name'));
                if(this.tummy.collection.length < 4){
                    this.tummy.ingest(enemy.model);
                    enemy.trigger('dead');
                }
                else{
                    GameLog.message('But I\'m full!');
                }
            },

            evolve: function(){
                console.log('I\'m evolllviiiiing');
            },

            hit: function(damage, enemy, retaliate){
                this.model.set('stats', damage);
                GameLog.message('I took 1 damage and have ' + this.model.get('stats').HP + 'HP left');
                if(this.model.get('stats').HP === 0){ this.dead(); }
                else{
                    var me = this;
                    if(!retaliate){
                        var retaliate = true;
                        setTimeout(function(){
                            BattleState.attackTarget(enemy, me, retaliate); 
                        },1200);
                    }
                    else{
                        GameLog.message('End of Turn');
                    }
                }
            },

            levelUp: function(){
                console.log('Level uppu');
            },

            poop: function(){
                this.tummy.poop();
            },

            spawn: function(){
                this.model = new Player();
                this.listenTo(this.model,'change',this.render);
                this.render();
                this.tummy = new TummyView();
            }
       });
       return new PlayerView;
    }
);