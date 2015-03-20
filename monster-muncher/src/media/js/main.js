require(
    [
        'jquery',
        'app/App',
        'app/HandlebarsUtil',
    ],
    function($, App, HandlebarsUtil){
        'use strict';
        console.log('MAIN INITIALIZE');

        $.ajaxSetup({timeout: 20000});
        HandlebarsUtil.registerHelpers();

        App.start();
    }
);