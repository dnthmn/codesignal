// Sample question

// Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

// Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

// Example

// For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].

// (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
// (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
// (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
// For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

// Since all the elements of numbers are increasing, there are no zigzags.

// For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].

// Since all the elements of numbers are the same, there are no zigzags.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer numbers

// An array of integers.

// Guaranteed constraints:
// 3 ≤ numbers.length ≤ 100,
// 1 ≤ numbers[i] ≤ 109.

// [output] array.integer

// Return an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

const solution = (numbers) => {
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    const [a, b, c] = [numbers[i], numbers[i + 1], numbers[i + 2]];

    if ((a < b && b > c) || (a > b && b < c)) result.push(1);
    else result.push(0);
  }

  return result;
};

console.log(solution([1, 2, 1, 3, 4]));
console.log(solution([1, 2, 3, 4]));

// Tests passed: 16/16.
// Sample tests:
// 8/8
// Hidden tests:
// 8/8
// Score:
// 100/100

// General Coding Skills Evaluation Framework
// Framework Example Content
// Module 1 – Basic Coding

// Given an array a, your task is to output an array b of the same length by applying the following transformation:
// • For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
// • If an element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, use 0 in its place
// • For instance, b[0] = 0 + a[0] + a[1]

// Example
// For a = [4, 0, 1, -2, 3]:
// • b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
// • b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// • b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
// • b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
// • b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
// So, the output should be solution(a) = [4, 5, -1, 2, 1]

const solution1 = (a) => {
  const result = [];

  for (let i = 0; i <= a.length - 1; i++) {
    const b =
      (isNaN(a[i - 1]) ? 0 : a[i - 1]) +
      (isNaN(a[i]) ? 0 : a[i]) +
      (isNaN(a[i + 1]) ? 0 : a[i + 1]);

    result.push(b);
  }

  return result;
};

console.log(solution1([4, 0, 1, -2, 3]));
