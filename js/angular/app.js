var app = angular.module('myApp', []);

  app.controller('myCtrl', function($scope, $http) {
      
      $http.get('js/angular/ingredients.json').
       success(function(data) {
         $scope.ingredients = data.ingredients;
       }).
       error(function() {
         // log error
       });

  //$scope.choices = [{id: 'choice1'}, {id: 'choice2'}];
  
  $scope.addNewIngredient = function() {
    var newItemNo = $scope.ingredients.length+1;
    $scope.ingredients.push({'id':+newItemNo});
  };
    
  $scope.removeIngredient = function() {
    var lastItem = $scope.ingredients.length-1;
    $scope.ingredients.splice(lastItem);
  };
  
});