function findIndex(array, value) {
  let result = -1;
  let findout = false;
  let mid;
  let l = 0;
  let r = array.length - 1;
  while (findout === false && l <= r) {
    mid = Math.floor((r + l) / 2);
    if (array[mid] === value) {
      findout = true;
      result = mid;
    } else if (array[mid] > value) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return result;
}
module.exports = findIndex;
