/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solucion O(n2)
export function twoSum (nums, target) {
  if (nums.length < 2) return [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/*
/// Solucion O(n) RECOMENDADA
export function twoSum (nums, target) {
  if (nums.length < 2) return [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    /// Define complement as the number needed to reach the target.
    const complement = target - nums[i];
    if (map.has(complement)) {
        /// If the number needed to reach the target exists in the map then return [Index of the number needed, Index of nums[i]].
        return [map.get(complement), i];
    }
    /// In case you don't have the complement, store in maps the number as index and the index as value.
    map.set(nums[i], i);
  }
  return [];
}
*/

// Solucion O(n) con arreglos
// export function twoSum (nums, target) {
//  if (nums.length < 2) return [];
//   const aux = [];
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in aux) {
//       return [aux[complement], i];
//     }
//     aux[nums[i]] = i;
//     console.log(nums[i], i, aux);
//   }
//   return [];
// }
