var websiteBuilder = angular.module('websiteBuilder',['ngMaterial']);

websiteBuilder.controller('websiteCtrl', function($scope) {
  $scope.name = 'Saurabh Sharma';

  $scope.quote = 'the people who are crazy enough to think they can change the world are the ones who do ~  Steve Jobs';
});
