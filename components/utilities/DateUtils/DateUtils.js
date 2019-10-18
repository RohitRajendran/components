import moment from 'moment';

/** Compares a month/year to see if it's after the current month/year.
 * @param {string} date - The date to compare.
 * @returns {boolean} - Returns true if the month/year comes after the current month/year.
 */
export function isAfterMonth(date) {
  return moment(date, 'MM/YYYY').isAfter(moment());
}

/** Compares a month/year to see if it's before the current month/year.
 * @param {string} date - The date to compare.
 * @returns {boolean} - Returns true if the month/year comes before the current month/year.
 */
export function isBeforeMonth(date) {
  return moment(date, 'MM/YYYY').isBefore(moment());
}

/** Compares a month/year to see if it's the same or before the current month/year.
 * @param {string} date - The date to compare.
 * @returns {boolean} - Returns true if the month/year comes before the current month/year.
 */
export function isSameOrBeforeMonth(date) {
  return moment(date, 'MM/YYYY').isSameOrBefore(moment().startOf('month'));
}

/** Compares a month/year to see if it's the same or after the current month/year.
 * @param {string} date - The date to compare.
 * @returns {boolean} - Returns true if the month/year comes after the current month/year.
 */
export function isSameOrAfterMonth(date) {
  return moment(date, 'MM/YYYY').isSameOrAfter(moment().startOf('month'));
}
