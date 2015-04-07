define(
    [
        'backbone',
        'handlebars',
        'text!parties/player/tummy/FoodTemplate.html'
    ],
    function(Backbone, Handlebars, FoodTemplate){
       var FoodView = Backbone.View.extend({
            className: 'digested-monster',

            template: Handlebars.compile(FoodTemplate),


            initialize: function(){
                console.log(this.model);
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                console.log('RENDERING GOOD');
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return FoodView;
    }
);