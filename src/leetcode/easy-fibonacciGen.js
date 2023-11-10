/**
 * Write a generator function that returns a generator object which yields the fibonacci sequence.
 * The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
 * The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
 *
 * @return {Generator<number>}
 */

export function * fibGenerator () {
  // Initialize the current and next values in the Fibonacci sequence.
  let [currentValue, nextValue] = [0, 1];
  while (true) {
    // Return the current Fibonacci number
    yield currentValue;
    // Update the current and next values to calculate the next Fibonacci number.
    [currentValue, nextValue] = [nextValue, currentValue + nextValue];
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
