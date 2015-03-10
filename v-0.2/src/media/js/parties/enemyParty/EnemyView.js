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
                'click': 'fightMe'
            },

            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            fightMe: function(){
                BattleState.attack(this.model);
                console.log('I took 2 damage and have',this.model.get('stats').HP,'HP left');
                if(this.model.get('stats').HP <= 0){
                    this.dead();
                }
                BattleState.attack(PlayerView.model);
                PlayerView.trigger('hit');
                if(PlayerView.model.get('stats').HP <= 0){
                    PlayerView.trigger('dead');
                }
            },

            dead: function(){
                this.model.destroy
                this.remove();
            }
       });
       return EnemyView;
    }
);