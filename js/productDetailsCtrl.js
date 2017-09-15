angular.module('shopApp').controller('detailsCtrl', function($scope, shopService, $stateParams){

    $scope.getDetails = function(id) {
        shopService.getDetails(id).then(function(response) {
            $scope.details = response;
            console.log(response)
        });
    };
    $scope.getDetails($stateParams.id);
    
    });