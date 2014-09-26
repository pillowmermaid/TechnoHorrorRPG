/*
Individual view for each enemy passed in from the Enemy Party Collection.
Will have randomizers to generate appropriate stats for its respective models.
*/
define(
    [
        'backbone',
        'text!app/hostile/EnemyUnitTemplate.html'
    ],
    function(Backbone, EnemyUnitTemplate){
       var EnemyView = Backbone.View.extend({
            tagName: 'tr',
            className: 'market-row',

            template: Handlebars.compile(EnemyUnitTemplate),


            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return EnemyView;
    }
);