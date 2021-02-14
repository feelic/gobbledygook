export function bindNumber(n, min, max) {
  if (n > max) {
    return max;
  }
  if (n < min) {
    return min;
  }
  return n;
}
export function getOrdinalNumber(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}
