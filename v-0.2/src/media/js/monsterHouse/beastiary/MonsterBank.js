define(
    [
        'backbone',
        'underscore',
        'monsterHouse/beastiary/Beastiary'
    ],
    function(Backbone, _, Beastiary){
        'use strict';

        var beastiary = new Beastiary();
        beastiary.fetch({reset:true});

        return beastiary;
    }
);