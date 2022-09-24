/**
 *
 * @param {number[]} A
 */

function solution(A) {
  const length = A.length;

  if (!length) {
    return 1;
  }

  const sortedA = A.sort((a, b) => a - b);

  if (sortedA[0] > 1) {
    return 1;
  }

  const halfLength = Math.floor(length / 2);

  for (let i = 0; i < halfLength; i += 1) {
    const first = sortedA[i];
    const last = sortedA[length - i - 1];
    const firstExpectedNext = first + 1;
    const lastExpectedNext = last - 1;
    const firstNext = sortedA[i + 1];
    const lastNext = sortedA[length - i - 1 - 1];

    if (firstNext !== firstExpectedNext) {
      return firstExpectedNext;
    }

    if (lastNext !== lastExpectedNext) {
      return lastExpectedNext;
    }
  }

  return sortedA[length - 1] + 1;
}

console.log(solution([2, 3, 1, 5]));

// function solution(A) {
//   const length = A.length;

//   if (!length) {
//     return 1;
//   }

//   const sortedA = A.sort((a, b) => a - b);

//   if (sortedA[0] > 1) {
//     return 1;
//   }

//   for (let i = 0; i < length; i += 1) {
//     const current = sortedA[i];
//     const expectedNext = current + 1;
//     const next = sortedA[i + 1];

//     if (next !== expectedNext) {
//       return expectedNext;
//     }
//   }
// }

/**
 * Task description
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
 */
