import { compose } from '../src';

describe('compose', () => {
  const testCases = [
    { functions: [], value: 0, output: 0, description: 'Composition of an empty list of functions returns the identity function' },
    { functions: [x => x + 1], value: 0, output: 1, description: 'Composition of a single function returns that function' },
    { functions: [x => x * 2, x => x + 1], value: 2, output: 6, description: 'Composition of two functions' },
    { functions: [x => x * 2, x => x + 1, x => x - 3], value: 2, output: 0, description: 'Composition of three functions' },
    { functions: [x => x * 2, x => x + 1, x => x - 3], value: 100, output: 196, description: 'Composition of three functions with a large input value' }
  ];

  testCases.forEach((testCase) => {
    test(testCase.description, () => {
      const fn = compose(testCase.functions);
      const result = fn(testCase.value);
      expect(result).toBe(testCase.output);
    });
  });
});
