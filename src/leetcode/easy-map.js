/**
 * Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 *
 * @param {number[]} array
 * @param {Function} aFunction
 * @return {number[]}
 */

export function map (array, aFunction) {
  const newArray = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = aFunction(array[i], i);
  }
  return newArray;
}

export function map2 (array, aFunction) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(aFunction(array[i], i));
  }
  return newArray;
}
