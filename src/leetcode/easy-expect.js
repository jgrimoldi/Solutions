/**
 * Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
 * * toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
 * * notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 *
 * @param {string} value
 * @return {Object}
 */

export function expect (value) {
  return {
    toBe: (otherValue) => {
      if (value !== otherValue) throw Error('Not Equal');
      return value === otherValue;
    },
    notToBe: (otherValue) => {
      if (value === otherValue) throw Error('Equal');
      return value !== otherValue;
    }
  };
}

export function expect2 (value) {
  return {
    toBe: (otherValue) => assertEquality(value === otherValue, 'Not Equal'),
    notToBe: (otherValue) => assertEquality(value !== otherValue, 'Equal')
  };
}

function assertEquality (condition, errorMessage) {
  if (!condition) {
    throw new Error(errorMessage);
  }

  return condition;
}
