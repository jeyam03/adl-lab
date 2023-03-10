function sortAlphabetically(str) {
  return str.split('').sort().join('');
}

var str = 'webmaster';
var sortedStr = sortAlphabetically(str);
console.log(sortedStr)