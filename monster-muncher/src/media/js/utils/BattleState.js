define(
    [
        'underscore',
    ],
    function(_) {
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

            /* If the target is at or belo 15% of their HP, the player
            can eat them; removing it from the battlefield and placing
            it in the player's "belly" */
            eatTarget: function(target, player){
                var me = this;
                var targetHP = target.model.get('stats').HP;
                if( targetHP <= 2 ){
                    player.trigger('eat', target);
                }
                else{
                    setTimeout(function(){
                        me.attackTarget(player,this,true);
                    },1200);
                }
            }

        };
        return BattleState;
    } 
);