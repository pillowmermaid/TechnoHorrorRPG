define(
    [
        'backbone',
        'app/framework/AppConfig',
        'app/framework/AppRouter',
        'app/areas/TestArea/TestArea'
    ],
    function(Backbone, AppConfig, Router, TestArea) {
        'use strict';

        return {
            start: function start() {
                console.log('APP INITIALIZED');

               /* var router = new Router();
                Backbone.history.start({ root: AppConfig.appRoot });*/

                var testArea = new TestArea();
                $('.app-container').html(testArea.render().$el);
            }
        };
    }
);