define(
    [
        'backbone',
        'handlebars',
        'text!parties/enemyParty/EnemyTemplate.html'
    ],
    function(Backbone, Handlebars, EnemyTemplate){
       var EnemyView = Backbone.View.extend({
            tagName: 'div',
            className: 'enemy',

            template: Handlebars.compile(EnemyTemplate),


            initialize: function(){
                console.log(this.model);
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