define(
    [
        'backbone',
        'app/domain/beast'
    ],
    function(Backbone, Beast){
        var Beastiary = Backbone.Collection.extend({
            model: Beast,
            url: 'js/app/domain/beastiary.json'
        });
        return Beastiary;
    }
);