import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import _ from 'lodash';

export const MaskTypes = {currency: 'currency'};

/** @constant {regex[]} The mask for a phone number */
export const PhoneNumberMask = {
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
export const SsnNumberMask = {
  mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  regex: /\d{3}-\d{2}-\d{4}/,
};

/** @constant {regex[]} The mask for a date */
export const DateMask = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: createAutoCorrectedDatePipe('mm/dd/yyyy'),
  regex: /\d\d\/\d\d\/\d\d\d\d/,
};

/** @constant {regex[]} The mask for a month/year date */
export const MonthMask = {
  mask: [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: createAutoCorrectedDatePipe('mm/yyyy'),
  regex: /\d\d\/\d\d\d\d/,
};

/** @constant {regex[]} The mask for a zip code */
export const ZipMask = {
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/],
  regex: /^\d{5}(-\d{4})?$/,
};

/**
 * Create a ticker mask which only accepts capital letters
 * @param {string} input - raw input from component
 * @returns {regex[]} The mask
 */
export const TickerMask = {
  /* istanbul ignore next */
  mask(input) {
    return _.fill(Array(input.length), /[a-zA-Z]/);
  },
  regex: /[a-zA-Z]+/,
};

/**
 * Create a mask which only accepts letters, commas, and spaces
 * @param {string} input - raw input from component
 * @returns {regex[]} the mask
 */
export const CommaSeparatedMask = {
  /* istanbul ignore next */
  mask(input) {
    return _.fill(Array(input.length + 1), /[A-Za-z, ]/);
  },
  regex: /[A-Za-z]+[A-Za-z, ]*/,
};

/** @constant {Object} A currency mask */
export const CurrencyMask = {
  mask: createNumberMask({prefix: ''}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
};

/** @constant {Object} A currency mask */
export const CurrencyMaskAllowNegative = {
  mask: createNumberMask({prefix: '', allowNegative: true}),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
};

/** @constant {Object} A currency mask that accepts decimals */
export const CurrencyDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
  }),
  regex: /[0-9]+/,
  type: MaskTypes.currency,
};

/** @constant {Object} A number mask */
export const NumberMask = {
  mask: createNumberMask({
    prefix: '',
    includeThousandsSeparator: false,
    allowLeadingZeroes: true,
  }),
  regex: /[0-9]+/,
};

/** @constant {Object} A percentage mask that allows decimals */
export const PercentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
  }),
  regex: /[0-9]+/,
};

/** @constant {Object} A percentage mask that allows decimals */
export const PercentageWithDecimalMaskAllowNegative = {
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
 * @constant {Object} A percentage mask for percentages < 100% and up
 * to three digits after the decimal place.
 */
export const SmallPercentageWithDecimalMask = {
  mask: createNumberMask({
    prefix: '',
    suffix: '%',
    allowDecimal: true,
    includeThousandsSeparator: false,
    decimalLimit: 3,
    integerLimit: 2,
  }),
  regex: /\d{0,2}(\.\d{0,3})?/,
};

/** @constant {Object} A mask to loosely match Apex account numbers */
export const ApexAccount = {
  mask: [/\d/, /[A-Z]/, /[A-Z]/, /\d/, /\d/, /\d/, /\d/, /\d/],
  regex: /\d[A-Z]{2}\d{5}/,
};
