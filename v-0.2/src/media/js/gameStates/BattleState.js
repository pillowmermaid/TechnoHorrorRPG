define(
    [
        'backbone',
        'underscore',
    ],
    function(Backbone, _) {
        'use strict';
        var BattleState = {

            attackEnemy: function(target){
                var targetStats = _.clone(target.get('stats'));
                targetStats.HP -= 2;
                target.set('stats',targetStats);
            },

            attackPlayer: function(player){
                var playerStats = _.clone(player.get('stats'));
                playerStats.HP -= 2;
                player.set('stats',playerStats);
            }

        };
        return BattleState;
    } 
);