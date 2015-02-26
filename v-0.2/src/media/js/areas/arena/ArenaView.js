define(
    [
        'backbone',
        'handlebars',
        'text!areas/arena/ArenaTemplate.html'
    ],
    function(Backbone, Handlebars, ArenaTemplate) {
        'use strict';
        var ArenaView = Backbone.View.extend({
            el: '#app-container',

            template: Handlebars.compile(ArenaTemplate),

            render: function(){ 
                this.$el.html(this.template);
                return this;
            }
        });
        return ArenaView;
    }
);