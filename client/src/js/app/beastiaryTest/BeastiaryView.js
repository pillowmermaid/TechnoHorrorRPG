define(
    [
        'backbone',
        'app/domain/Repository',
        'app/beastiaryTest/BeastView',
        'text!app/beastiaryTest/BeastiaryTemplate.html'
    ],
    function(Backbone, Repository, BeastView, BeastiaryTemplate) {
        'use strict';
        var BeastiaryView = Backbone.View.extend({
            tagName: 'table',
            id: 'beastiary-table',

            template: Handlebars.compile(BeastiaryTemplate),

            initialize: function(){
                this.beastiary = Repository.getBeastiary();
                this.listenTo(this.beastiary, 'reset', this.loadBeastiary);
            },

            render: function(){
                this.$el.html(this.template);
                return this;
            },

            loadBeastiary: function(){
                var enemies = [];
                for(var i=0; i < this.beastiary.length; i++){
                    var enemy = this.beastiary.models[i];
                    enemies[i] = new BeastView({model: enemy});
                    $(this.el).append(enemies[i].render().$el);
                }
            }
        });
        return BeastiaryView;
    }
);