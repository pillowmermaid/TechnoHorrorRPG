define(
    [
        'backbone',
        'handlebars',
        'text!areas/main/MainAreaTemplate.html'
    ],
    function(Backbone, Handlebars, MainAreaTemplate) {
        'use strict';
        var MainAreaView = Backbone.View.extend({
            el: '#app-container',

            template: Handlebars.compile(MainAreaTemplate),

            render: function(){
                this.$el.html(this.template);
                return this;
            }
        });
        return MainAreaView;
    }
);