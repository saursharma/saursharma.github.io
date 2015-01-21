var websiteBuilder = angular.module('websiteBuilder',['ngMaterial']);

websiteBuilder.controller('websiteCtrl', function($scope, $interval, $mdBottomSheet) {
  $scope.name = 'Saurabh Sharma';  
    
  $scope.bio = 'FullStack developer, in love with JavaScript. Working on client side at Google, Gurgaon sice more than 2 years. Have worked mainly on AngularJS, PolymerJS and Python.';

  $scope.quote = 'the people who are crazy enough to think they can change the world are the ones who do ~  Steve Jobs';

  $scope.details = '23 years old, Male, living in Gurgaon';

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

  $scope.showBottomSheet = function($event) {
    $mdBottomSheet.show({
        templateUrl: 'bottom-sheet.html',
        controller: 'BottomSheetCtrl',
        targetEvent: $event
    });
  };

  $interval(function() {
    for (i=0; i<$scope.skills.length; i++) {
      if($scope.skills[i].counter < $scope.skills[i].score) $scope.skills[i].counter += 1;
    }
  }, 20, 0, true);
});

websiteBuilder.controller('BottomSheetCtrl', function($scope) {
  $scope.social = [{
    website: 'LinkedIn',
    profile: 'https://www.linkedin.com/profile/view?id=74513702',
    icon: 'linked in'
  }, {
    website: 'Facebook',
    profile: 'https://www.facebook.com/sharma.saurabh114',
    icon: 'facebook'
  }];
});
