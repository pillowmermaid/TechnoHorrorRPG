/*
Collection which holds each of the enemies passed in from the 
beastiary, through the EnemyUnit model.

TODO:
Build method to pull in random units from the beastiary.
--Transfer the randomizer method from the view?
*/
define(
    [
        'backbone',
        'app/domain/Repository',
        'app/hostile/EnemyUnit'
    ],
    function(Backbone, Repository, EnemyUnit){

        var EnemyParty = Backbone.Collection.extend({
            model: EnemyUnit
        });
        return EnemyParty;
    }
);