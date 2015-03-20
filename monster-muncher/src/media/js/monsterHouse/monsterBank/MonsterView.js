define(
    [
        'backbone',
        'handlebars',
        'text!monsterHouse/monsterBank/MonsterTemplate.html'
    ],
    function(Backbone, Handlebars, MonsterTemplate){
       var MonsterView = Backbone.View.extend({
            tagName: 'div',
            className: 'monster',

            template: Handlebars.compile(MonsterTemplate),


            initialize: function(){
                this.listenTo(this.model, 'change', this.render);
            },

            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },
       });
       return MonsterView;
    }
);