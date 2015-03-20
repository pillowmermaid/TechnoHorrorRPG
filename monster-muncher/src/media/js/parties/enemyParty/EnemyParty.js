define(
    [
        'backbone',
        'parties/enemyParty/Enemy',
    ],
    function(Backbone, Enemy) {
        var EnemyParty = Backbone.Collection.extend({
            model: Enemy,
        });
        return EnemyParty;
    }
);