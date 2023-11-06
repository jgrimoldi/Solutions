import { reduce } from '../src';

describe('Array.reduce function', () => {
  const testCases = [
    { params: { numbers: [], aFunction: () => {}, initValue: 0 }, result: 0, description: 'Empty array should return the initial value' },
    { params: { numbers: [1, 2, 3, 4, 5], aFunction: (accumulator, currentValue) => accumulator + currentValue, initValue: 0 }, result: 15, description: 'Should correctly reduce an array of integers' },
    { params: { numbers: ['Hello', ' ', 'World', '!'], aFunction: (accumulator, currentValue) => accumulator + currentValue, initValue: '' }, result: 'Hello World!', description: 'Should correctly reduce an array of strings' },
    { params: { numbers: [{ value: 1 }, { value: 2 }, { value: 3 }], aFunction: (accumulator, currentValue) => { return { value: accumulator.value + currentValue.value }; }, initValue: { value: 0 } }, result: { value: 6 }, description: 'Should correctly reduce an array of objects' }
  ];

  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      const { numbers, aFunction, initValue } = testCase.params;
      const result = reduce(numbers, aFunction, initValue);
      expect(result).toStrictEqual(testCase.result);
    });
  });
});
