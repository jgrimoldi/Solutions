import { sleep } from '../src';

describe('sleep function', () => {
  const testsCases = [
    { millis: 100, expected: 100, description: 'resolves after the specified time' },
    { millis: 1000, expected: 1000, description: 'resolves after the specified time (long)' },
    { millis: 1, expected: 1, description: 'resolves after the specified time (short)' }
  ];

  testsCases.forEach(testCase => {
    test(testCase.description, async () => {
      const start = Date.now();
      await sleep(testCase.millis);
      const end = Date.now();
      const elapsedTime = end - start;
      expect(elapsedTime).toBeGreaterThanOrEqual(testCase.expected);
    });
  });
});
