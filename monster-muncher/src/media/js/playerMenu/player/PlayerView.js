define(
    [
        'backbone',
        'handlebars',
        'utils/BattleState',
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
                if(this.tummy){
                    this.tummy.render();
                }
                return this;
            },

            dead: function(){
                alert('I\'m dead!');
                this.tummy.remove();
                this.model.unbind()
                this.model.destroy();
                this.spawn();
            },

            digest: function(){
                if(this.tummy.collection.length > 0 ){
                    if(typeof this.tummy.digest() === 'number'){
                        this.model.heal(this.tummy.digest());
                        this.tummy.flush();
                    }
                }
                else{
                    GameLog.message('I haven\'t eaten anything yet!');
                }
            },

            eat: function(enemy){
                GameLog.message('I\'m eating '+enemy.model.get('name'));
                if(this.tummy.collection.length < 4){
                    this.tummy.ingest(enemy.model);
                    enemy.trigger('dead');
                }
                else{
                    GameLog.message('I\'m too full to eat anymore!');
                }
            },

            evolve: function(){
                console.log('I\'m evolllviiiiing');
            },

            hit: function(damage, enemy, retaliate){
                this.model.damage(damage);
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
                this.tummy = new TummyView();
                this.render();
            }
       });
       return new PlayerView;
    }
);