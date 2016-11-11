app.factory('SDQLService', function ($http, $location)
  {var SDQLService = this;

  this.site = [];
  this.date =  [];
  this.selectedTeamPoints = [];
  this.opposingTeamPoints = [];
  this.pointSpread = [];
  this.total = [];
  this.ATSPerformance = [];
  this.totalPerformance = [];
  this.result = [];
  this.favOrDogHomeOrAway = [];
  this.additionalTrends = [];

  this.getData = function (selectedTeam, opposingTeam, site = this.site, date = this.date, selectedTeamPoints = this.selectedTeamPoints, opposingTeamPoints = this.opposingTeamPoints, pointSpread = this.pointSpread, total = this.total, ATSPerformance = this.ATSPerformance, totalPerformance = this.totalPerformance, result = this.result, favOrDogHomeOrAway = this.favOrDogHomeOrAway, additionalTrends = this.additionalTrends) {

  json_callback = function (data) {
    for (var i = 0; i < data.groups[0].columns[0].length; i++) {
      site.push(data.groups[0].columns[0][i]);
      date.push(data.groups[0].columns[1][i]);
      selectedTeamPoints.push(data.groups[0].columns[2][i]);
      opposingTeamPoints.push(data.groups[0].columns[3][i]);
      pointSpread.push(data.groups[0].columns[4][i]);
      total.push(data.groups[0].columns[5][i]);
      if(data.groups[0].columns[5][i] < data.groups[0].columns[2][i] + data.groups[0].columns[3][i]) {
        totalPerformance.push( 'OVER by '  + -1 * (data.groups[0].columns[5][i] - (data.groups[0].columns[2][i] + data.groups[0].columns[3][i])))
      }
      else if (data.groups[0].columns[5][i] == data.groups[0].columns[2][i] + data.groups[0].columns[3][i]) {
        totalPerformance.push('PUSH')
      }
      else if(data.groups[0].columns[5][i] > data.groups[0].columns[2][i] + data.groups[0].columns[3][i]) {
        totalPerformance.push('UNDER by ' +  (data.groups[0].columns[5][i] - (data.groups[0].columns[2][i] + data.groups[0].columns[3][i])))
      }
      result.push(data.groups[0].columns[2][i] - data.groups[0].columns[3][i]);
      if (data.groups[0].columns[3][i] / -1 > 0 && site[i] == 'away'){
        favOrDogHomeOrAway.push('line%3C0%20and%20site%3Daway')}
      if (data.groups[0].columns[3][i] / -1 > 0 && site[i] == 'home'){
        favOrDogHomeOrAway.push('line%3C0%20and%20site%3Dhome')}
      if (data.groups[0].columns[3][i] / -1 < 0 && site[i] == 'home'){
        favOrDogHomeOrAway.push('line%3E0%20and%20site%3Dhome')}
      if (data.groups[0].columns[3][i] / -1 < 0 && site[i] == 'away'){
        favOrDogHomeOrAway.push('line%3E0%20and%20site%3Daway')}
      if (selectedTeamPoints[i])
        ATSPerformance.push(selectedTeamPoints[i] - opposingTeamPoints[i] + pointSpread[i])
      else if (selectedTeamPoints[i] - opposingTeamPoints[i] + pointSpread[i] == 0)
      ATSPerformance.push('PUSH')
  }
};
      return $http({
        url :'http://api.sportsdatabase.com/nfl/query.json?sdql=site%2Cdate%2Cpoints%2Co%3Apoints%2Cline%2Ctotal%40team%3D' + selectedTeam + '%20and%20o:team%3D' + opposingTeam + '%20and%20season%3E2011&output=json&api_key=guest' ,
        method: 'jsonp'})
    };
    this.getData2 = function (selectedTeam, favOrDogHomeOrAway = this.favOrDogHomeOrAway) {
      json_callback = function (data) {
        console.log(data, "working");
      };
      $http({
      url: 'http://api.sportsdatabase.com/nfl/query.json?sdql=site%2Cdate%2Cpoints%2Co%3Apoints%2Cline%2Ctotal%40team%3D' + selectedTeam + '%20and%20' + favOrDogHomeOrAway[favOrDogHomeOrAway.length] + '%20and%20season%3E2011&output=json&api_key=guest',
      method: 'jsonp'
      })
    }
    return this;
});
