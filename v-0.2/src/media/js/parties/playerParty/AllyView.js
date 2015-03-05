define(
    [
        'backbone',
        'handlebars',
        'text!parties/playerParty/AllyTemplate.html'
    ],
    function(Backbone, Handlebars, AllyTemplate){
       var AllyView = Backbone.View.extend({
            tagName: 'div',
            className: 'ally',

            template: Handlebars.compile(AllyTemplate),


            initialize: function(){
                console.log(this.model);
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return AllyView;
    }
);