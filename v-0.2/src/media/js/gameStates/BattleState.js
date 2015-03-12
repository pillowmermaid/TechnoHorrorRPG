define(
    [
        'backbone',
        'underscore',
        'parties/playerParty/PlayerView'
    ],
    function(Backbone, _, PlayerView) {
        'use strict';
        var BattleState = {

            attackTurn: function(target){
                if(PlayerView.model.get('stats').AGI <= target.model.get('stats').AGI){
                    this.attackPlayer(target);
                }
                else{
                    this.attackTarget(target);
                }
            },

            /* The attack functions will later involve calculations 
            for proper damage numbers but for now a set damage amount will do */
            attackPlayer: function(attacker){
                var damage = 1;
                var playerStats = _.clone(PlayerView.model.get('stats'));
                playerStats.HP -= damage;
                if(playerStats.HP <= 0){ 
                    playerStats.HP=0;
                    PlayerView.trigger('dead');
                }
                else{
                    var payback = { 'playerStats': playerStats, 'attacker': attacker };
                    console.log(payback.attacker);
                    PlayerView.trigger('hit', payback);
                }
            },

            attackTarget: function(target){
                var damage = 2;
                var targetStats = _.clone(target.model.get('stats'));
                targetStats.HP -= damage;
                if(targetStats.HP <= 0){ 
                    targetStats.HP=0;
                    target.trigger('dead');
                }
                else{
                    target.trigger('hit',targetStats);
                }
            },

            eatTarget: function(target){

            }

        };
        return BattleState;
    } 
);