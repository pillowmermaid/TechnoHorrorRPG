/*
Individual view for each ally unit passed in from the Player Party Collection.
Will have randomizers to generate appropriate stats for its respective models.
*/
define(
    [
        'backbone',
        'text!app/player/PlayerUnitTemplate.html'
    ],
    function(Backbone, PlayerUnitTemplate){
       var PlayerUnitView = Backbone.View.extend({
            tagName: 'tr',
            className: 'market-row',

            template: Handlebars.compile(PlayerUnitTemplate),


            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return PlayerUnitView;
    }
);