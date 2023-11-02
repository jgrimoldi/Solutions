import { isPalindrome } from '../src';

describe('Function isPalindrome', () => {
  describe('Should return false', () => {
    const testCases = [
      { number: -343, description: 'Negative number (even when a palindrome).' },
      { number: -543, description: 'Negative number.' },
      { number: undefined, description: 'Undefined.' },
      { number: 895, description: 'Not palindrome.' },
      { number: 10, description: 'Single digit input.' }
    ];

    testCases.forEach((testCase) => {
      test(`Return false for ${testCase.description}`, () => {
        const result = isPalindrome(testCase.number);
        expect(result).toBeFalsy();
      });
    });
  });

  describe('Should return true', () => {
    const testCases = [
      { number: 232, description: 'Palindrome: 232' },
      { number: 23432, description: 'Palindrome: 23432' },
      { number: 2379732, description: 'Palindrome: 2379732' },
      { number: 22, description: 'Palindrome: 22' },
      { number: 1, description: 'Simple digit: 1' }
    ];

    testCases.forEach((testCase) => {
      test(`Return true for ${testCase.description}`, () => {
        const result = isPalindrome(testCase.number);
        expect(result).toBeTruthy();
      });
    });
  });
});
