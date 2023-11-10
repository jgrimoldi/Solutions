
/**
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

export function argumentsLength (...args) {
  return args.length;
}

argumentsLength(1, 2, 3, 4, 5); // 5
argumentsLength({}, null, '3'); // 3
