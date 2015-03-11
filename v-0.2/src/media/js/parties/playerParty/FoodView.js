define(
    [
        'backbone',
        'handlebars',
        'text!parties/playerParty/FoodTemplate.html'
    ],
    function(Backbone, Handlebars, FoodTemplate){
       var FoodView = Backbone.View.extend({
            tagName: 'div',
            className: 'digested-monster',

            template: Handlebars.compile(FoodTemplate),


            initialize: function(){
                console.log(this.model);
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return FoodView;
    }
);