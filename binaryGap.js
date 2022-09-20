/** Triangles made of asterisks (*)
 *   *
 *   * *
 *   * * *
 *   * * * *
 *   * * * * *
 */

const division = "===========================";

const logAsteriskTriangle = (count) => {
  for (let i = 1; i <= count; i += 1) {
    const asterisks = [];

    for (let j = 0; j < i; j += 1) {
      asterisks.push("* ");
    }

    console.log(asterisks.join(""));
  }

  console.log(division);
};

logAsteriskTriangle(5);

/**
 *    * * * * * * * * *
 *      * * * * * * *
 *        * * * * *
 *          * * *
 *            *
 */

const logAsteriskTriangleWithSpaces = (count) => {
  for (let i = count; i > 0; i -= 1) {
    const asterisks = [];

    for (let j = 0; j < count - i; j += 1) {
      asterisks.push(" ");
    }

    for (let j = 0; j < 2 * i - 1; j += 1) {
      asterisks.push("*");
    }

    console.log(asterisks.join(""));
  }

  console.log(division);
};

logAsteriskTriangleWithSpaces(5);

/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 *
 */

function solution(N) {
  const decimalToBinaryNumber = N.toString(2);
  const digitsCount = decimalToBinaryNumber.length;

  let rightZerosTrimNumber = "";

  for (let i = digitsCount - 1; i >= 0; i -= 1) {
    if (decimalToBinaryNumber[i] === "1") {
      rightZerosTrimNumber = decimalToBinaryNumber.slice(0, i + 1);

      break;
    }
  }

  const trimDigitsCount = rightZerosTrimNumber.length;
  let currentCount = 0;
  let highestCount = 0;

  for (let i = 0; i <= trimDigitsCount; i += 1) {
    if (rightZerosTrimNumber[i] === "0") {
      currentCount += 1;
    } else {
      if (currentCount > highestCount) {
        highestCount = currentCount;
      }

      currentCount = 0;
    }
  }

  return highestCount;
}

console.log("binary gap:", division);
console.log("first: ", solution(1041));
console.log("second: ", solution(15));
console.log("third: ", solution(32));
console.log("fourth: ", solution(1253456));
