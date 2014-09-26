define(
    [
        'backbone',
        '../views/marketListView',
        '../views/commodityListView',
        '../views/locationListView',
        '../views/currencyListView'
    ],

    function(Backbone, MarketListView, CommodityListView, LocationListView, CurrencyListView){
        var Router = Backbone.Router.extend({
            routes: {
                '' : 'index',
                'markets' : 'showMarkets',
                'commodities' : 'showCommodities',
                'locations' : 'showLocations',
                'currencies' : 'showCurrencies'
            },
            initialize: function(){
                console.log('ROUTER INITIALIZED');
            },
            index: function(){
                this.boldText('home');
                $('.data-container').html('');
            },
            showMarkets: function(){
                var marketListView = new MarketListView();
                this.boldText(Backbone.history.fragment);
                $('.data-container').html(marketListView.render().$el);
            },
            showCommodities: function(){
                var commodityListView = new CommodityListView();
                this.boldText(Backbone.history.fragment);
                $('.data-container').html(commodityListView.render().$el);
            },
            showLocations: function(){
                var locationListView = new LocationListView();
                this.boldText(Backbone.history.fragment);
                $('.data-container').html(locationListView.render().$el);
            },
            showCurrencies: function(){
                var currencyListView = new CurrencyListView();
                this.boldText(Backbone.history.fragment);
                $('.data-container').html(currencyListView.render().$el);
            },
            boldText: function(curUrl){
                var routeArray = ['home','markets','commodities','locations','currencies'];
                for (var i = 0; i < 5; i++){
                    $('#' + routeArray[i]).css('font-weight','normal');
                }
                $('#' + curUrl).css('font-weight','bold');
            }
        });
        return Router;
    }
);