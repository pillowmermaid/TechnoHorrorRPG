define(
    [
        'backbone',
        'handlebars',
        'text!playerMenu/player/tummy/FoodTemplate.html'
    ],
    function(Backbone, Handlebars, FoodTemplate){
       var FoodView = Backbone.View.extend({
            className: 'food',

            template: Handlebars.compile(FoodTemplate),


            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
                this.on('eject', this.eject, this);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            eject: function(){
                this.model.destroy();
                this.remove();
            },
       });
       return FoodView;
    }
);