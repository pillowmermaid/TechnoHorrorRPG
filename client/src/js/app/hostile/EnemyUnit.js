/*
Sets up each enemy that comes from the beastiary then passes it on
to the EnemyParty collection.

TODO:
Put EnemyUnit initialization methods in here???
*/
define(
    [
        'backbone'
    ],
    function(Backbone){
        var Enemy = Backbone.Model.extend();
        return Enemy;
    }
);