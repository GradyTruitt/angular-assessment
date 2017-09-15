angular.module('shopApp').controller('shopCtrl', function($scope, shopService){

    $scope.image = true;

    $scope.hideShow = function ($index) {
        if ($scope.image === true) {
            $scope.image = false;
            document.getElementById('img'+$index).style.display = 'none';
        }
        else {
            $scope.image = true;
            document.getElementById('img'+$index).style.display = 'block';
        }
    };

    $scope.getProducts = function() {        
        shopService.getProducts().then(function(res){
        $scope.products = res;
        });
    };

    $scope.getProducts(); 

    
    });