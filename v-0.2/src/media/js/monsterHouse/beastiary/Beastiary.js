define(
    [
        'backbone',
        'monsterHouse/beastiary/Monster',
    ],
    function(Backbone, Monster) {
        var Beastiary = Backbone.Collection.extend({
            model: Monster,
            url: 'media/js/monsterHouse/beastiary/beastiary.json'
        });
        return Beastiary;
    }
);