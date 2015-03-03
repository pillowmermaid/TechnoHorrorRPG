define(
    [
        'backbone',
        'underscore',
        'handlebars',
        'monsterHouse/beastiary/MonsterBank',
        'monsterHouse/monsterBank/MonsterView',
        'text!monsterHouse/monsterBank/MonsterBankTemplate.html'
    ],
    function(Backbone, _, Handlebars, MonsterBank, MonsterView, MonsterBankTemplate) {
        'use strict';
        var MonsterViewerView = Backbone.View.extend({
            el: '#app-container',

            template: Handlebars.compile(MonsterBankTemplate),

            initialize: function(){
                this.collection = MonsterBank;
                this.listenTo(this.collection, 'reset', this.loadMonsterBank);
            },

            render: function(){
                this.$el.html(this.template);       
                this.loadMonsterBank();
                return this;
            },

            loadMonsterBank: function(){
                _.each(this.collection.models, function(mnstr){
                    var monster = new MonsterView({model: mnstr})
                    $('#monster-viewer').append(monster.render().$el);
                }, this)
            }

        });
        return MonsterViewerView;
    }
);