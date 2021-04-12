function deleteDigit(n) {
  const arr = n.toString().split('');
  for (let x = 0; x <= 9; x++) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (+arr[i] === x) {
        arr.splice(i, 1);
        break;
      }
    }
    if (n.toString().split('').length !== arr.length) break;
  }
  return Number(arr.join(''));
}

module.exports = deleteDigit;
