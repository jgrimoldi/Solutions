/**
 * Given an integer n, return a counter function.
 * This counter function initially returns n and then returns 1 more than
 * the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 * @param {number} number
 * @return {Function} counter
 */

export function createCounter (number) {
  return function () {
    return number++;
  };
}
