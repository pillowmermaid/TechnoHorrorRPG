define(
    [
        'backbone',
        'app/domain/Repository',
        'app/beastiaryTest/BeastiaryView',
        'app/hostile/EnemyPartyView',
        'app/player/PlayerPartyView',
        'text!app/areas/TestArea/TestAreaTemplate.html'
    ],
    function(Backbone, Repository, BeastiaryView, EnemyPartyView, PlayerPartyView, TestAreaTemplate) {
        'use strict';
        var TestAreaView = Backbone.View.extend({
            tagName: 'div',
            id: 'test-area',

            template: Handlebars.compile(TestAreaTemplate),

            render: function(){
                this.$el.html(this.template);
                this.loadBeastiary();
                this.loadEnemyParty();
                this.loadPlayerParty();
                return this;
            },

            loadBeastiary: function(){
                var beastiary = new BeastiaryView();
                $(this.el).append(beastiary.render().$el);
            },

            loadEnemyParty: function(){
                var enemyParty = new EnemyPartyView();
                $(this.el).append(enemyParty.render().$el);
            },
            loadPlayerParty: function(){
                var playerParty = new PlayerPartyView();
                $(this.el).append(playerParty.render().$el);
            }
        });
        return TestAreaView;
    }
);