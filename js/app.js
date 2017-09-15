angular.module('shopApp', ['ui.router']).config(function($stateProvider,$urlRouterProvider) {
    
        $stateProvider
    
            .state('home', {
                templateUrl: '/views/home.html',
                url: '/'
            })
    
            .state('about', {
                templateUrl: '/views/about.html',
                url: '/about',
            })
    
            .state('blog', {
                templateUrl: '/views/blog.html',
                url: '/blog',
            })

            .state('shop', {
                templateUrl: '/views/shop.html',
                url: '/shop',
                controller: 'shopCtrl'
            })

            .state('details', {
                templateUrl: '/views/product-details.html',
                url: '/details/:id',
                controller: 'detailsCtrl'
            });
    
            $urlRouterProvider.otherwise('/');

    })