import accounting from 'accounting';

/**
 * Removes "$" and "," from currency strings
 * @param {String} currencyString - The number to format
 * @returns {String} - Returns the formatted number
 */
export const cleanCurrency = (currencyString) => {
  return typeof currencyString === 'string'
    ? currencyString.replace(/[,$]/g, '')
    : currencyString;
};

/** Formats a number into currency.
 * @param {String} numString - The number to format.
 * @returns {String} - Returns the formatted number.
 */
export const formatCurrency = (numString) => {
  const value = cleanCurrency(numString);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value).toFixed(2));
};

/** Formats a number into currency without decimal points.
 * @param {String} numString - The number to format.
 * @returns {String} - Returns the formatted number.
 */
export const formatCurrencyNoDecimal = (numString) => {
  const value = cleanCurrency(numString);

  return accounting.formatMoney(Number(value), {
    symbol: '$',
    precision: 0,
    format: {
      pos: '%s%v',
      neg: '-%s%v',
      zero: '%s%v',
    },
  });
};

/**
 * Format strings of arbitrary length with ellipsis
 * @param {String} str - String to format
 * @param {Number} charLimit - Number of charactes to limit str to
 * @returns {String} Formatted str
 */
export const formatEllipsis = (str, charLimit) => {
  return str.length <= charLimit ? str : `${str.substring(0, charLimit - 1)}…`;
};
