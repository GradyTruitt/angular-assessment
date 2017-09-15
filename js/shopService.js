angular.module('shopApp').service('shopService', function($http){

    this.getProducts = function(){
        return $http.get('https://practiceapi.devmountain.com/products').then(function(res){

            return res.data;
        });
    };

    this.getDetails = function(id) {
        var url = 'https://practiceapi.devmountain.com/products/' + id;
        return $http.get(url).then(function(response) {
            console.log('fired')
            return response.data;
        });
    };

});