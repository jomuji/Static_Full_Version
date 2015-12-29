var app = angular.module('myApp', []);
app.controller('IngredientController', function($scope, $http) {
    $http.get("js/angular/ingredients.js").then(function(response) {$scope.ingredients = response.data.ingredients;});
    
});