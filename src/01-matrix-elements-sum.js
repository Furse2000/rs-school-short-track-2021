/**
 * Given mtrx, a rectangular mtrx of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} mtrx
 * @return {Number}
 *
 * @example
 * mtrx = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mtrx) {
  let s = 0;
  for (let i = 1; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[0].length; j++) {
      if (mtrx[i - 1][j] !== 0) {
        s += mtrx[i][j];
      }
    }
  }
  return s + mtrx[0].reduce((a, b) => a + b, 0);
}

module.exports = getMatrixElementsSum;
