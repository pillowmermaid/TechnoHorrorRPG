define(
    [
        'backbone',
        'text!app/beastiaryTest/BeastTemplate.html'
    ],
    function(Backbone, BeastTemplate){
       var BeastView = Backbone.View.extend({
            tagName: 'tr',
            className: 'market-row',

            template: Handlebars.compile(BeastTemplate),


            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return BeastView;
    }
);