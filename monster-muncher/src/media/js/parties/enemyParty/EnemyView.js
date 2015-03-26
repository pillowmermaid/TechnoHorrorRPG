define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'gameStates/BattleState',
        'parties/playerParty/PlayerView',
        'text!parties/enemyParty/EnemyTemplate.html'
    ],
    function(Backbone, _, Handlebars, BattleState, PlayerView, EnemyTemplate){
       var EnemyView = Backbone.View.extend({
            className:'enemy',
            template: Handlebars.compile(EnemyTemplate),

            events:{
                'click .attack-me': 'fight',
                'click .eat-me': 'eat'
            },

            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
                this.on('hit', this.hit, this);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            dead: function(){
                console.log(this.model.get('name'),'has been defeated');
                this.model.destroy();
                this.remove();
            },

            eat: function(){
                BattleState.eatTarget(this.model);
            },

            fight: function(){
                BattleState.attackPhase(this, PlayerView);
            },

            hit: function(damage, player, retaliate){
                this.model.set('stats', damage);
                console.log(this.model.get('name'),'I took 2 damage and have',this.model.get('stats').HP,'HP left');
                if(this.model.get('stats').HP === 0){ this.dead(); }
                else{
                    var me = this;
                    if(!retaliate){
                        var retaliate = true;
                        setTimeout(function(){
                            BattleState.attackTarget(player, me, retaliate);
                        }, 2000);
                    }
                    else{
                        console.log('End of Turn');
                    }
                }
            }
       });
       return EnemyView;
    }
);