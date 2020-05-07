import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const hideValidityFalse = () => false;
export const MaskTypes = {currency: 'currency'};

/** @constant {regex[]} The mask for a phone number */
export const phoneNumberMask = {
  mask: [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  regex: /\(?[1-9]\d{2}\)? ?\d{3}-?\d{4}/,
};

/** @constant {regex[]} The mask for an SSN */
export const ssnNumberMask = {
  mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  regex: /\d{3}-\d{2}-\d{4}/,
};

/** @constant {regex[]} The mask for a date */
export const dateMask = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: createAutoCorrectedDatePipe('mm/dd/yyyy'),
  regex: /\d\d\/\d\d\/\d\d\d\d/,
};

/** @constant {regex[]} The mask for a month/year date */
export const monthMask = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: createAutoCorrectedDatePipe('mm/yyyy'),
  regex: /\d\d\/\d\d\d\d/,
};

/** @constant {regex[]} The mask for a zip code */
export const zipMask = {
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
  regex: /^\d{5}(-\d{4})?$/,
};

/**
 * Create a ticker mask which only accepts capital letters
 * @param {string} input - raw input from component
 * @returns {regex[]} The mask
 */
export const tickerMask = {
  /* istanbul ignore next */
  mask(input) {
    return Array(input.length).fill(/[a-zA-Z]/);
  },
  regex: /[a-zA-Z]+/,
};

/**
 * Create a mask which only accepts letters, commas, and spaces
 * @param {string} input - raw input from component
 * @returns {regex[]} the mask
 */
export const commaSeparatedMask = {
  /* istanbul ignore next */
  mask(input) {
    return Array(input.length + 1).fill(/[A-Za-z, ]/);
  },
  regex: /[A-Za-z]+[A-Za-z, ]*/,
};

/** @constant {object} - A currency mask */
export const currencyMask = {
  mask: createNumberMask({prefix: ''}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
  sanitize: /[,]/g,
};

/** @constant {object} A currency mask */
export const currencyMaskAllowNegative = {
  mask: createNumberMask({prefix: '', allowNegative: true}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
  sanitize: /[,]/g,
};

/** @constant {object} - A currency mask that accepts decimals */
export const currencyDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
  }),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
  sanitize: /[,]/g,
};

/** @constant {object} - A number mask */
export const numberMask = {
  mask: createNumberMask({
    prefix: '',
    includeThousandsSeparator: false,
    allowLeadingZeroes: true,
  }),
  regex: /[0-9]+/,
};

/** @constant {regex[]} A percentage mask that does not allow decimals */
export const percentageWithoutDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowNegative: false,
    allowDecimal: false,
    includeThousandsSeparator: false,
  }),
  regex: /[0-9]+/,
};

/** @constant {object} - A percentage mask that allows decimals */
export const percentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
  }),
  regex: /[0-9]+/,
};

/** @constant {object} - A percentage mask that allows decimals */
export const percentageWithDecimalMaskAllowNegative = {
  mask: createNumberMask({
    prefix: '',
    allowNegative: true,
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
  }),
  regex: /[0-9]+/,
};

/**
 * @constant {object} - A percentage mask for percentages < 100% and up
 * to three digits after the decimal place.
 */
export const smallPercentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
    integerLimit: 2,
  }),
  regex: /\d{0,2}(\.\d{0,3})?/,
};

/** @constant {object} - A mask to loosely match Apex account numbers */
export const apexAccount = {
  mask: [/\d/, /[A-Z]/, /[A-Z]/, /\d/, /\d/, /\d/, /\d/, /\d/],
  regex: /\d[A-Z]{2}\d{5}/,
};

/** @constant {Object} - Maps prop names prop mask types. */
export const maskEnum = {
  ApexAccount: {mask: apexAccount},
  PhoneNumber: {mask: phoneNumberMask},
  SsnNumber: {mask: ssnNumberMask},
  Date: {
    mask: dateMask,
    placeholder: 'MM/DD/YYYY',
    isValid: (val) => {
      return val ? val.length === 10 : true;
    },
    validationErrorMsg: 'Invalid date value',
  },
  Month: {
    mask: monthMask,
    placeholder: 'MM/YYYY',
    isValid: (val) => {
      return val ? val.length === 7 : true;
    },
    validationErrorMsg: 'Invalid date value',
  },
  Zip: {mask: zipMask},
  Ticker: {mask: tickerMask},
  CommaSeparated: {mask: commaSeparatedMask},
  Currency: {mask: currencyMask},
  CurrencyDecimal: {mask: currencyDecimalMask},
  CurrencyAllowNegative: {mask: currencyMaskAllowNegative},
  Number: {mask: numberMask},
  PercentageWithoutDecimal: {mask: percentageWithoutDecimalMask},
  PercentageWithDecimal: {mask: percentageWithDecimalMask},
  PercentageWithDecimalAllowNegative: {
    mask: percentageWithDecimalMaskAllowNegative,
  },
  SmallPercentageWithDecimal: {mask: smallPercentageWithDecimalMask},
};

/** @constant {Array} - Masks that should have '%' appended to it */
export const percentageMasks = [
  'SmallPercentageWithDecimal',
  'PercentageWithoutDecimal',
  'PercentageWithDecimal',
  'PercentageWithDecimalAllowNegative',
];

/** @constant {Array} - Masks that should have '$' prepended to it */
export const currencyMasks = [
  'Currency',
  'CurrencyDecimal',
  'CurrencyAllowNegative',
];
