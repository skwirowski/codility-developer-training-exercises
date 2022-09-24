const division = "===========================";

function solution(A) {
  const obj = {};
  let max = 0;
  const length = A.length;

  for (let i = 0; i < length; i += 1) {
    const current = A[i];

    if (current > max) {
      max = current;
    }

    if (obj[current]) {
      delete obj[current];
    } else {
      obj[current] = current;
    }
  }

  const result = Object.values(obj)[0];

  if (result) {
    return result;
  } else {
    return max + 1;
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// function solution(A) {
//   return A.reduce((prev, curr) => (prev ^= curr), 0);
// }

// console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// function solution(A) {
//   const hash = {};

//   for (let i = 0; i < A.length; i += 1) {
//     if (!hash.hasOwnProperty(A[i]) || hash[A[i] === "0"]) {
//       hash[A[i]] = "1";
//     } else {
//       hash[A[i]] = "0";
//     }
//   }

//   for (const key in hash) {
//     if (hash.hasOwnProperty(key)) {
//       if (hash[key] === "1") {
//         return parseInt(key);
//       }
//     }
//   }
// }

// function solution(A) {
//   const arr = [];
//   for (let i = 0; i < A.length; i += 1) {
//     const current = A[i];
//     const index = arr.indexOf(current);

//     if (index === -1) {
//       arr.push(current);
//     } else {
//       arr.splice(index, 1);
//     }
//   }

//   return arr[0];
// }

// function solution(A) {
//   const arrayLength = A.length;

//   for (let i = 0; i <= arrayLength; i += 1) {
//     const currentElement = A[i];
//     A[i] = "*";
//     const indexOfOccurrence = A.indexOf(currentElement);
//     const elementOccurs = indexOfOccurrence !== -1;
//     const isNumber = typeof currentElement === "number";

//     if (isNumber && !elementOccurs) {
//       return currentElement;
//     }

//     if (isNumber && elementOccurs) {
//       A[indexOfOccurrence] = "*";
//     }
//   }
// }

// function solution(A) {
//   const arrayLength = A.length;

//   for (let i = 0; i <= arrayLength; i += 1) {
//     const currentElement = A[i];
//     const occurrences = A.filter((element) => element === currentElement);

//     if (occurrences.length < 2) {
//       return currentElement;
//     }
//   }
// }

/**
 * A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

class Solution { public int solution(int[] A); }

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
 */
