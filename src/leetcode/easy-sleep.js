/**
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 * @param {number} millis
 * @return {Promise}
 */

export async function sleep (millis) {
  return new Promise(resolve => {
    // setTimeout(functionReference, delay)
    setTimeout(resolve, millis);
  });
}

// export async function sleep (millis) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, millis);
//   });
// }
