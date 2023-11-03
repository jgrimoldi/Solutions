import { createCounter } from '../src';

describe('Function createCounter', () => {
  const testCases = [
    { number: 10, output: [10, 11, 12, 13], description: 'Positive numbers' },
    { number: -2, output: [-2, -1, 0, 1], description: 'Negative numbers' },
    { number: 0, output: [0, 1, 2, 3], description: 'Starting from 0' },
    { number: 1, output: [1, 2, 3, 4], description: 'Starting from 1' },
    { number: 100, output: [100, 101, 102, 103], description: 'Large positive number' },
    { number: -100, output: [-100, -99, -98, -97], description: 'Large negative number' }
  ];
  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      const counter = createCounter(testCase.number);
      const result = [counter(), counter(), counter(), counter()];
      expect(result).toStrictEqual(testCase.output);
    });
  });
});
