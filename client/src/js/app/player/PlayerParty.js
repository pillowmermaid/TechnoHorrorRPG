/*
Collection which holds each of the player's allies.

Interactions:

In battle, compare stats between selected ally and target enemy: 
attack strength vs enemy, move turn, damage taken from enemy, 
charisma check (for Player Avatar only)
*/

define(
    [
        'backbone',
        'app/player/PlayerUnit'
    ],
    function(Backbone, PlayerUnit){

        var PlayerParty = Backbone.Collection.extend({
            model: PlayerUnit
        });
        return PlayerParty;
    }
);