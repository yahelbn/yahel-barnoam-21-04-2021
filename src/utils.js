export function getDayFromDate(dayTempDate) {
  let date = new Date(dayTempDate);
  var n = date.getDay();
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayName = days[n];
  return dayName;
}

export function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  return Math.floor(fToCel);
}

export function contains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) return true;
  }
  return false;
}
