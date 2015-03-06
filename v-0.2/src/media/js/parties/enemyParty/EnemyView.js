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
                if(playerStats.AGI > myStats.AGI){
                    playerTurn = true;
                }
                else{
                    playerTurn = false;
                }
                do{
                    if(playerTurn){
                        console.log('me before',myStats);
                        var damage = 2;
                        myStats.HP -= damage;
                        this.model.set('stats',myStats);
                        console.log('me after',myStats);
                        console.log('I took',damage,'damage and have',myStats.HP,'HP left');
                        if(this.model.get('stats').HP <= 0){
                            console.log('I\'m Dead!');
                            isFighting = !isFighting;
                            isDead = true;
                        }
                        else{
                            console.log("Ouch that hurt!");
                            playerTurn = !playerTurn;
                        }
                    }
                    else{
                        console.log('player before',playerStats);
                        var damage = 2;
                        playerStats.HP -= damage;
                        PlayerView.model.set('stats', playerStats);
                        console.log('player after',playerStats);
                        console.log('Player took',damage,'damage and has',playerStats.HP,'HP left');
                        if(PlayerView.model.get('stats').HP <= 0){
                            console.log('Gotcha bitch!');
                            isFighting = !isFighting;
                        }
                        else{
                            console.log("I'll get you next time!");
                            playerTurn = !playerTurn;
                        }
                    }
                }
                while (isFighting);
                if(isDead){
                    this.dead();
                }
                else{
                    alert('Ded');
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