/**
 *
 * @param {number[]} A
 */
function solution(A) {
  const lengthA = A.length;

  if (!lengthA) {
    return 0;
  }

  const sortedA = A.sort((a, b) => a - b);

  if (sortedA[0] > 1) {
    return 0;
  }

  const halfLength = Math.floor(lengthA / 2);

  for (let i = 0; i < halfLength; i += 1) {
    const first = sortedA[i];
    const last = sortedA[lengthA - i - 1];
    const firstExpectedNext = first + 1;
    const lastExpectedPrev = last - 1;
    const firstNext = sortedA[i + 1];
    const lastPrev = sortedA[lengthA - i - 2];

    if (firstNext !== firstExpectedNext) {
      return 0;
    }

    if (lastPrev !== lastExpectedPrev) {
      return 0;
    }
  }

  return 1;
}

console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));

/**
 * A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
 */
