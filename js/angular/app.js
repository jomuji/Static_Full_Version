var app = angular.module('myApp', []);

/* $http ajax calls really belongs in a service, 
but I'll be using them inside the controller for this demo */ 

app.controller('myCtrl', function($scope, $http) {
    $http.get('js/angular/ingredients.json').
       success(function(data) {
         $scope.ingredients = data.ingredients;
       }).
       error(function() {
         // log error
       });
    
//  $http.get('js/angular/ingredients.json').then(function(response) {
//    $scope.ingredients = response.data.ingredients;
//  });
  //inputting json directly for this example
//  $scope.languages = [        
//    {name:"English", value:0},
//    {name:"Spanish", value:1},
//    {name:"German", value:3},
//    {name:"Russian", value:2},
//    {name:"Korean", value:1}
//  ];
//  $scope.save = function() {
//    $http.post('js/angular/ingredients.json', $scope.ingredients).then(function(response) {
//      $scope.msg = 'Data saved';
//    });
//    //$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
//  };
    
    $scope.editData=function(ingredient){
        ingredient.editEnabled = true;
      };
    
    $scope.save = function(){
      $http.post('js/angular/saveJson.php', $scope.ingredients).then(function() {
        // log success
          $scope.msg = 'Data saved';
      });
    };
});