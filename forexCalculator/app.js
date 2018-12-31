var forexCalculator = angular.module('forexCalculator', []);

forexCalculator.directive('forexCalculatorDir', [function(){
    return{
        restrict: 'C',
        scope: {
            title:  '=',
            },
        //template: '<h1>forexCalculator</h1>',
        templateUrl: 'forexCalculator/currencyCalculator.html'
    };

}]);

forexCalculator.controller('forexCalculatorController',[ '$scope', '$http', function($scope, $http){
    //get sample json file
    $http.get('data/currency.json').then(function(response){
    $scope.currency = response.data;
    console.log($scope.currency);
    });
}]);
    
    
 