/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].



Compilation successful.

Example test:   [1, 3, 6, 4, 1, 2]
WRONG ANSWER (got 1 expected 5)

Example test:   [1, 2, 3]
WRONG ANSWER (got 3 expected 4)

Example test:   [-1, -3]
OK

Detected some errors.
*/

const division = "===========================";

function solutionIndexOf(A) {
  const checkIfOnlyHasNegativeNumbers = A.every((num) => num <= 0);

  if (checkIfOnlyHasNegativeNumbers) {
    return 1;
  }

  const count = A.length;
  let greatestValue = 0;

  for (let i = 1; i <= count; i += 1) {
    const hello = A.indexOf(i);

    if (hello === -1) {
      return i;
    }

    if (i > greatestValue) {
      greatestValue = i;
    }
  }

  return greatestValue + 1;
}

console.log("indexOf", division);
console.log("first: ", solutionIndexOf([1, 3, 6, 4, 1, 2]));
console.log("second: ", solutionIndexOf([1, 2, 3]));
console.log("third: ", solutionIndexOf([-1, -3]));
console.log("fourth: ", solutionIndexOf([3, 5, 6]));

function solutionRecursive(A) {
  const checkIfOnlyHasNegativeNumbers = A.every((num) => num <= 0);

  if (checkIfOnlyHasNegativeNumbers) {
    return 1;
  }

  const sortedAscendingA = A.sort((a, b) => a - b);
  const firstNumIsBiggerThanOne = sortedAscendingA[0] > 1;

  if (firstNumIsBiggerThanOne) {
    return 1;
  }

  function check(arr) {
    const nextNumIsEqualCurrent = arr[0] === arr[1];
    const nextNumIsGreaterByOne = arr[0] + 1 === arr[1];

    if (!nextNumIsEqualCurrent && !nextNumIsGreaterByOne) {
      return arr[0] + 1;
    } else {
      arr.shift();

      if (arr.length === 1) {
        return arr[0] + 1;
      }

      return check(arr);
    }
  }

  return check(sortedAscendingA);
}

console.log("recursive", division);
console.log("first: ", solutionRecursive([1, 3, 6, 4, 1, 2]));
console.log("second: ", solutionRecursive([1, 2, 3]));
console.log("third: ", solutionRecursive([-1, -3]));
console.log("fourth: ", solutionRecursive([3, 5, 6]));

function solutionForLoop(A) {
  const checkIfOnlyHasNegativeNumbers = A.every((num) => num <= 0);

  if (checkIfOnlyHasNegativeNumbers) {
    return 1;
  }

  const sortedAscendingA = A.sort((a, b) => a - b);
  const firstNumIsBiggerThanOne = sortedAscendingA[0] > 1;

  if (firstNumIsBiggerThanOne) {
    return 1;
  }

  for (let i = 0; i <= sortedAscendingA.length; i += 1) {
    const nextNumIsEqualCurrent =
      sortedAscendingA[i] === sortedAscendingA[i + 1];
    const nextNumIsGreaterByOne =
      sortedAscendingA[i] + 1 === sortedAscendingA[i + 1];

    if (!nextNumIsEqualCurrent && !nextNumIsGreaterByOne) {
      return sortedAscendingA[i] + 1;
    }
  }
}

console.log("for loop", division);
console.log("first: ", solutionForLoop([1, 3, 6, 4, 1, 2]));
console.log("second: ", solutionForLoop([1, 2, 3]));
console.log("third: ", solutionForLoop([-1, -3]));
console.log("fourth: ", solutionForLoop([3, 5, 6]));
