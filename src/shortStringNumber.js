/**
 * Converts number to short string.
 *
 * @param n Number which must be converted to string.
 * @returns {string|number} Short string number or origin number.
 */
function shortStringNumber(n) {
  if (typeof n !== 'number') {
    return n;
  }

  if (n <= 1e4) {
    return n;
  }
  if (n <= 1e6) {
    return (n / 1e3).toFixed(1) + 'k';
  }
  if (n <= 1e9) {
    return (n / 1e6).toFixed(2) + 'm';
  }

  return n;
}

module.exports = shortStringNumber;
