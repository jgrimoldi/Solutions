import { arrayLast } from '../src';

describe('Array.prototype.last() Method', () => {
  const testCases = [
    { array: [], result: -1, description: 'Should return -1 if empty array' },
    { array: [1, 2, 3, 4, 5], result: 5, description: 'Should return 5' },
    { array: [null, false, 'Hello', { name: 'Example' }], result: { name: 'Example' }, description: 'Should return the last element, which is an object' },
    { array: [true, false], result: false, description: 'Should return false' },
    { array: [null, null, null], result: null, description: 'Should return null' },
    { array: [undefined], result: undefined, description: 'Should return undefined' },
    { array: ['Only one element'], result: 'Only one element', description: 'Should return the single element' },
    { array: [{}], result: {}, description: 'Should return an empty object' },
    { array: [1, 2, {}], result: {}, description: 'Should return an object' },
    { array: [1, 2, undefined], result: undefined, description: 'Should return undefined' }
  ];

  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      const result = arrayLast.call(testCase.array);
      // toStrictEqual o toEqual to compare complex objects
      expect(result).toStrictEqual(testCase.result);
    });
  });
});
