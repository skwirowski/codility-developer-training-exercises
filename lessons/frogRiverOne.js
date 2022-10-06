/**
 * Count elements
 * By creating array of counters each number may be counted in the array by using an index
 * that corresponds to the value of the given number
 * It is important that the array in which we count elements is sufficiently large.
 * If we know that all the elements are in the set {0, 1, . . . , m}, then the array used for counting
 * should be of size m + 1.
 * */

function counting(A, m) {
  const lengthA = A.length;
  const countArr = new Array(m + 1).fill(0);

  for (let i = 0; i < lengthA; i += 1) {
    countArr[A[i]] += 1;
  }

  return countArr;
}

console.log(counting([0, 1, 2, 4, 0, 1, 2], 4));

/**
 * Swap elements
 * You are given an integer m (1 <= m <= 1 000 000) and two non-empty, zero-indexed
 * arrays A and B of n integers, a0, a1, . . . , an−1 and b0, b1, . . . , bn−1 respectively (0 <= ai, bi <= m).
 * The goal is to check whether there is a swap operation which can be performed on these
 * arrays in such a way that the sum of elements in array A equals the sum of elements in
 * array B after the swap. By swap operation we mean picking one element from array A and
 * one element from array B and exchanging them.
 *
 * Solution O(n2): The simplest method is to swap every pair of elements and calculate the
 * totals. Using that approach gives us O(n3) time complexity. A better approach is to calculate
 * the sums of elements at the beginning, and check only how the totals change during the swap
 * operation.
 */

function swapElementsSlow(A, B, m) {
  const lengthA = A.length;
  let sumA = A.reduce((prev, curr) => prev + curr, 0);
  let sumB = B.reduce((prev, curr) => prev + curr, 0);

  for (let i = 0; i < lengthA; i += 1) {
    for (let j = 0; j < lengthA; j += 1) {
      const change = B[j] - A[i];
      sumA += change;
      sumB -= change;

      if (sumA === sumB) {
        return [i, j];
      }

      sumA -= change;
      sumB += change;
    }
  }

  return [];
}

// const testA = [1, 2, 3, 4, 5]; // sum = 15
// const testB = [1, 2, 3, 4, 7]; // sum = 17
// swappedA = [2, 2, 3, 4, 5] // sum = 16
// swappedB = [1, 1, 3, 4, 7] // sum = 16

// const testA = [3, 4, 5, 2, 1]; // sum = 15
// const testB = [3, 4, 7, 2, 1]; // sum = 17
// [4, 4, 5, 2, 1] = 16
// [3, 3, 7, 2, 1] = 16

const testA = [5, 2, 1, 3, 4]; // sum = 15
const testB = [7, 2, 1, 3, 4]; // sum = 17
console.log(swapElementsSlow(testA, testB, undefined));

/**
 * Solution O(n + m): The best approach is to count the elements of array A and calculate
 * the difference d between the sums of the elements of array A and B.
 * For every element of array B, we assume that we will swap it with some element from
 * array A. The difference d tells us the value from array A that we are interested in swapping,
 * because only one value will cause the two totals to be equal. The occurrence of this value can
 * be found in constant time from the array used for counting.
 */

function swapElements(A, B, m) {
  const lengthA = A.length;
  const sumA = A.reduce((prev, curr) => prev + curr, 0);
  const sumB = B.reduce((prev, curr) => prev + curr, 0);
  let diff = sumB - sumA;

  if (diff % 2 === 1) {
    return false;
  }

  diff /= 2;
  const countArr = counting(A, m);

  for (let i = 0; i < lengthA; i += 1) {
    const firstCondition = 0 <= B[i] - diff;
    const secondCondition = B[i] - diff <= m;

    const Bi = B[i];
    const substr = Bi - diff;
    const countArrEl = countArr[substr];

    const thirdCondition = countArrEl > 0;

    if (firstCondition && secondCondition && thirdCondition) {
      return true;
    }
  }

  return false;
}

// console.log(swapElements(testA, testB, 7));

/**
 *
 * @param {number} X - opposite bank position
 * @param {number[]} A - represents falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.
 */
function solution(X, A) {
  const lengthA = A.length;
  let stepsValuesSum = 0;
  const traveledSteps = {};

  for (let i = 1; i <= X; i += 1) {
    stepsValuesSum += i;
  }

  for (let i = 0; i < lengthA; i += 1) {
    const current = A[i];
    const isStepTraveled = current in traveledSteps;

    if (!isStepTraveled) {
      traveledSteps[current] = 0;
      stepsValuesSum -= current;
    }

    if (!stepsValuesSum) {
      return i;
    }
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(1, [1]));

function solutionB(X, A) {
  const isObjectIsEmpty = (obj) => {
    for (const _i in obj) {
      return false;
    }

    return true;
  };

  const lengthA = A.length;
  const steps = {};

  for (let i = 1; i <= X; i += 1) {
    steps[i] = 0;
  }

  for (let i = 0; i <= lengthA; i += 1) {
    const current = A[i];

    if (current in steps) {
      delete steps[current];
    }

    if (isObjectIsEmpty(steps)) {
      return i;
    }
  }

  return -1;
}

console.log(solutionB(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solutionB(1, [1]));

/**
 * A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

For example, you are given integer X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

Write a function:

class Solution { public int solution(int X, int[] A); }

that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

If the frog is never able to jump to the other side of the river, the function should return −1.

For example, given X = 5 and array A such that:

  A[0] = 1
  A[1] = 3
  A[2] = 1
  A[3] = 4
  A[4] = 2
  A[5] = 3
  A[6] = 5
  A[7] = 4
the function should return 6, as explained above.

Write an efficient algorithm for the following assumptions:

N and X are integers within the range [1..100,000];
each element of array A is an integer within the range [1..X].
 */
