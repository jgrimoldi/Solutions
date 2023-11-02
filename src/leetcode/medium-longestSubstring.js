/**
 * @param {string} string
 * @return {number}
 */
export function lengthOfLongestSubstring (string) {
  if (string === undefined || string === null) return 0;
  if (string.length < 1) return 0;
  if (string.length < 2) return 1;
  const set = new Set();
  let left = 0;
  let length = 0;
  for (let rigth = 0; rigth < string.length; rigth++) {
    while (set.has(string[rigth])) {
      set.delete(string[left]);
      left++;
    }
    set.add(string[rigth]);
    length = Math.max(length, rigth - left + 1);
  }

  return length;
}
