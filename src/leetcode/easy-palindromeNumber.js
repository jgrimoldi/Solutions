/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} number
 * @return {boolean}
 */

// export function isPalindrome (number) {
//   if (!number) return false;
//   const str = number.toString();
//   const reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

export function isPalindrome (number) {
  if (number < 0) return false;

  let copy = number;
  let reversed = 0;

  while (copy > 0) {
    const digit = copy % 10;
    reversed = reversed * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  return number === reversed;
}
