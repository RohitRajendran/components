import accounting from 'accounting';

/** Formats a number into currency.
 * @param {String} numString - The number to format.
 * @returns {String} - Returns the formatted number.
 */
export const formatCurrency = (numString) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(numString).toFixed(2));
};

/** Formats a number into currency without decimal points.
 * @param {String} numString - The number to format.
 * @returns {String} - Returns the formatted number.
 */
export const formatCurrencyNoDecimal = (numString) => {
  return accounting.formatMoney(Number(numString), {
    symbol: '$',
    precision: 0,
    format: {
      pos: '%s%v',
      neg: '-%s%v',
      zero: '%s%v',
    },
  });
};
