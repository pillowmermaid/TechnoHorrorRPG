define(
    [
        'backbone',
        'underscore',
    ],
    function(Backbone, _) {
        'use strict';
        var BattleState = {

            attack: function(target){
                var targetStats = _.clone(target.get('stats'));
                targetStats.HP -= 2;
                if(targetStats.HP <= 0){targetStats.HP=0;}
                target.set('stats',targetStats);
            }

        };
        return BattleState;
    } 
);