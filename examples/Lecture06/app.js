(function(){
'use strict';
var x = 3;
  angular.module('myFirstApp',[])

  .controller('MyFirstController',function($scope){
    $scope.name ="Chikero";
    $scope.sayHello = function(){
      return "Hello!";
      };
  });
})();
