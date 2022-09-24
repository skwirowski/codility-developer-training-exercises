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
