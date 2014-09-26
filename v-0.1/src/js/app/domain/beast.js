define(
    [
        'backbone'
    ],
    function(Backbone){
        var Beast = Backbone.Model.extend({
            urlRoot:'js/app/domain/beastiary.json'
        });
        return Beast;
    }
);