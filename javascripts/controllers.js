app.controller('SDQLController', function($scope, $http, SDQLService) {

  $scope.view = {};
  $scope.view.selectedTeam = 'Saints';
  $scope.view.opposingTeam = 'Panthers';
  $scope.view.site = SDQLService.site;
  $scope.view.date = SDQLService.date;
  $scope.view.selectedTeamPoints = SDQLService.selectedTeamPoints;
  $scope.view.opposingTeamPoints = SDQLService.opposingTeamPoints;
  $scope.view.pointSpread = SDQLService.pointSpread;
  $scope.view.total = SDQLService.total;
  $scope.view.ATSPerformance = SDQLService.ATSPerformance;
  $scope.view.totalPerformance = SDQLService.totalPerformance;
  $scope.view.result = SDQLService.result;
  $scope.view.favOrDogHomeOrAway = SDQLService.favOrDogHomeOrAway;
  $scope.view.additionalTrends = SDQLService.additionalTrends;


  $scope.view.getData = function (selectedTeam, opposingTeam) {
    SDQLService.getData(selectedTeam, opposingTeam)
  }
})
