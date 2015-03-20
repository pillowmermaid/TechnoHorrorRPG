define(
    [
        'backbone',
        'underscore',
    ],
    function(Backbone, _) {
        'use strict';
        var BattleState = {
            attackPhase: function(enemy, player){
                var retaliate = false;
                if(player.model.get('stats').AGI <= enemy.model.get('stats').AGI){
                    var attacker = enemy,
                        target = player;
                }
                else{
                    var attacker = player,
                        target = enemy;
                }
                this.attackTarget(target, attacker, retaliate);
            },

            /* The attack functions will later involve calculations 
            for proper damage numbers but for now a set damage amount will do. */
            attackTarget: function(target, attacker, retaliate){
                var damage = 2;
                var targetStats = _.clone(target.model.get('stats'));
                targetStats.HP -= damage;
                if(targetStats.HP <= 0){ 
                    targetStats.HP=0;
                }
                target.trigger('hit', targetStats, attacker, retaliate);
            },

            eatTarget: function(target){
                

            }

        };
        return BattleState;
    } 
);