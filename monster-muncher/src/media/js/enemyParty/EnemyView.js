define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'utils/BattleState',
        'utils/GameLog',
        'playerMenu/player/PlayerView',
        'text!enemyParty/EnemyTemplate.html'
    ],
    function(Backbone, _, Handlebars, BattleState, GameLog, PlayerView, EnemyTemplate){
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
                this.on('dead', this.dead, this);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            dead: function(){
                GameLog.message(this.model.get('name')+' has been defeated');
                this.model.destroy();
                this.remove();
            },

            eat: function(){
                BattleState.eatTarget(this, PlayerView);
            },

            fight: function(){
                BattleState.attackPhase(this, PlayerView);
            },

            hit: function(damage, player, retaliate){
                this.model.damage(damage);
                GameLog.message(this.model.get('name') + ' took 2 damage and has '+this.model.get('stats').HP+' HP left','</p>');
                if(this.model.get('stats').HP === 0){ this.dead(); }
                else{
                    var me = this;
                    if(!retaliate){
                        var retaliate = true;
                        setTimeout(function(){
                            BattleState.attackTarget(player, me, retaliate);
                        }, 1200);
                    }
                    else{
                        setTimeout(function(){
                            GameLog.message('End of Turn');
                        }, 1200);
                    }
                }
            }
       });
       return EnemyView;
    }
);