define(
    [
        'backbone',
        'underscore',
        'monsterHouse/beastiary/Beastiary'
    ],
    function(Backbone, _, Beastiary){
        'use strict';

        var beastiary = new Beastiary();

        var monsterBank = {
            initMonsterBank: function() { return beastiary; },
        };
        
        return monsterBank;
    }
);