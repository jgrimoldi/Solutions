import { lengthOfLongestSubstring } from '../src';

describe('Function lengthOfLongestSubstring', () => {
  describe('Should return 0 if the string is empty', () => {
    test('If string ""', () => {
      const string = '';
      const expected = 0;
      const result = lengthOfLongestSubstring(string);
      expect(result).toEqual(expected);
    });

    test('If string undefined.', () => {
      const string = undefined;
      const expected = 0;
      const result = lengthOfLongestSubstring(string);
      expect(result).toEqual(expected);
    });
  });

  describe('Should return the length of the longest substring without duplicated characters', () => {
    test('Should return 1 if the string is a single character', () => {
      const string = 'a';
      const expected = 1;
      const result = lengthOfLongestSubstring(string);
      expect(result).toEqual(expected);
    });

    test('For "abcabcbb", the result should be 3 ("abc")', () => {
      const string = 'abcabcbb';
      const expected = 3;
      const result = lengthOfLongestSubstring(string);
      expect(result).toEqual(expected);
    });

    test('For "bbbbb", the result should be 1', () => {
      const string = 'bbbbb';
      const expected = 1;
      const result = lengthOfLongestSubstring(string);
      expect(result).toEqual(expected);
    });

    test('For "pwwkew", the result should be 3 ("wke" or "kew")', () => {
      const string = 'pwwkew';
      const expected = 3;
      const result = lengthOfLongestSubstring(string);
      expect(result).toEqual(expected);
    });
  });
});
