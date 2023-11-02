import { twoSum } from '../src';

describe('Function twoSum', () => {
  describe('Should return [].', () => {
    test('If array [].', () => {
      const nums = [];
      const target = 6;
      const expected = [];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    test('If target undefined.', () => {
      const nums = [];
      const expected = [];
      const result = twoSum(nums);
      expect(result).toEqual(expected);
    });

    test('Array [8, 5] and target a non-sum number (eg. 10).', () => {
      const nums = [8, 5];
      const target = 10;
      const expected = [];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });

  describe('Should return indexes of the numbers that add up to the target', () => {
    test('Array [2,7,11,15] and target 9 should return [0, 1]', () => {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const expected = [0, 1];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    test('Array [3, 2, 4] and target 6 should return [1, 2].', () => {
      const nums = [3, 2, 4];
      const target = 6;
      const expected = [1, 2];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });

    test('Array [3, 3] and target 6 should return [0, 1].', () => {
      const nums = [3, 3];
      const target = 6;
      const expected = [0, 1];
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  });
});
