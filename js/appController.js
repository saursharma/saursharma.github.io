var websiteBuilder = angular.module('websiteBuilder',['ngMaterial']);

websiteBuilder.controller('websiteCtrl', function($scope, $interval) {
  $scope.name = 'Saurabh Sharma';

  $scope.quote = 'the people who are crazy enough to think they can change the world are the ones who do ~  Steve Jobs';

  //$scope.js = 0;

  $scope.skills = [{
    name: 'JavaScript',
    counter: 0,
    score: 80
  }, {
    name: 'AngularJS',
    counter: 0,
    score: 70
  }, {
    name: 'PolymerJS',
    counter: 0,
    score: 50
  }, {
    name: 'Python',
    counter: 0,
    score: 50
  }];

  // Need to find optimized way to create these function.
 // for (i=0; i<$scope.skills.length; i++) {
   // window.console.log($scope.skills[i].counter);
    $interval(function() {
      if($scope.skills[0].counter < $scope.skills[0].score) $scope.skills[0].counter += 1;
    }, 20, 0, true);
 // }
    $interval(function() {
      if($scope.skills[1].counter < $scope.skills[1].score) $scope.skills[1].counter += 1;
    }, 20, 0, true);
    $interval(function() {
      if($scope.skills[2].counter < $scope.skills[2].score) $scope.skills[2].counter += 1;
    }, 20, 0, true);
    $interval(function() {
      if($scope.skills[3].counter < $scope.skills[3].score) $scope.skills[3].counter += 1;
    }, 20, 0, true);
});
