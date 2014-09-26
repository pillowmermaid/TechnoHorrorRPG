require(
    [
        'jquery',
        'app/framework/App',
        'app/framework/HandlebarsUtil',
        'app/domain/Repository'
    ],
    function($, App, HandlebarsUtil){
        'use strict';
        console.log('MAIN INITIALIZE');

        $.ajaxSetup({timeout: 20000});
        HandlebarsUtil.registerHelpers();

        App.start();
    }
);