function getSumOfDigits(n) {
  let sum = 0;
  const strNArr = n.toString().split('');
  for (let i = 0; i < strNArr.length; i++) {
    sum += Number(strNArr[i]);
  }
  if (sum < 10) {
    return sum;
  }
  return getSumOfDigits(sum);
}

module.exports = getSumOfDigits;
