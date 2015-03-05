/*
The PlayerParty is a collection for the monsters that you 
recruit to your team; the Player themselves do not actually 
reside in the player party, they have their own view because
(ideally) they are special snowflakes and not lumped in with their
monster chums
*/

define(
    [
        'backbone',
        'parties/playerParty/Ally',
    ],
    function(Backbone, Ally) {
        var PlayerParty = Backbone.Collection.extend({
            model: Ally,
        });
        return PlayerParty;
    }
);