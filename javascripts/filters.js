app.filter('dateFilter', function(){
  return function (input) {
  year = input.toString().substr(0,4);
  month = input.toString().substr(4,2);
  day = input.toString().substr(6,8);
  if (month == 01) {
    return 'Jan.' + ' ' + day + ', ' + year;
  }
  if (month == 02) {
    return 'Feb.' + ' ' + day + ', ' + year;
  }
  if (month == 08) {
    return 'Aug.' + ' ' + day + ', ' + year;
  }
  if (month == 09) {
    return 'Sep.' + ' ' + day + ', ' + year;
  }
  if (month == 10) {
    return 'Oct.' + ' ' + day + ', ' + year;
  }
  if (month == 11) {
    return 'Nov.' + ' ' + day + ', ' + year;
  }
  if (month == 12) {
    return 'Dec.' + ' ' + day + ', ' + year;
  }
  }
});

app.filter('resultFilter', function() {
  return function (input) {
    if (input * -1 > 0) {
      return 'L by ' + input * -1;}
    else if (input * -1 < 0) {
    return 'W by ' + input;}
}
})
