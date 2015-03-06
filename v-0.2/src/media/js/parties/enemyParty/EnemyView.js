define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'parties/playerParty/PlayerView',
        'text!parties/enemyParty/EnemyTemplate.html'
    ],
    function(Backbone, _, Handlebars, PlayerView, EnemyTemplate){
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
                var playerStats = _.clone(PlayerView.model.get('stats'));
                var myStats = _.clone(this.model.get('stats'));
                var isFighting = true;
                var playerTurn, isDead = false;
                var damage = 2;
                if(playerStats.AGI > myStats.AGI){
                    playerTurn = true;
                }
                else{
                    playerTurn = false;
                }
                do{
                    if(playerTurn){
                        myStats.HP -= damage;
                        this.model.set('stats',myStats);
                        console.log('I took',damage,'damage and have',myStats.HP,'HP left');
                        if(this.model.get('stats').HP <= 0){
                            isFighting = !isFighting;
                            isDead = true;
                        }
                        else{
                            playerTurn = !playerTurn;
                        }
                    }
                    else{
                        PlayerView.trigger('hit',damage);
                        if(PlayerView.model.get('stats').HP <= 0){
                            isFighting = !isFighting;
                        }
                        else{
                            playerTurn = !playerTurn;
                        }
                    }
                }
                while (isFighting);
                if(isDead){
                    this.dead();
                }
                else{
                    PlayerView.trigger('dead');
                }
            },

            dead: function(){
                this.model.destroy
                this.remove();
                this.unbind();
            }
       });
       return EnemyView;
    }
);