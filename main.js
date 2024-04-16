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

// Measure performance
// const startDate0 = Date.now();
// solution([1, 2, 1, 3, 4]);
// const endDate0 = Date.now();
// console.log(`Execution time: ${endDate0 - startDate0} ms`);

// console.time("Execution Time");
// solution([1, 2, 1, 3, 4]);
// console.timeEnd("Execution Time");

// const startPerformance0 = performance.now();
// solution([1, 2, 1, 3, 4]);
// const endPerformance0 = performance.now();
// console.log(`Execution time: ${endPerformance0 - startPerformance0} ms`);

console.log(solution([1, 2, 1, 3, 4]));
// console.log(solution([1, 2, 3, 4]));

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

// Measure performance
// const startDate1 = Date.now();
// solution1([4, 0, 1, -2, 3]);
// const endDate1 = Date.now();
// console.log(`Execution time: ${endDate1 - startDate1} ms`);

// console.time("Execution Time");
// solution1([4, 0, 1, -2, 3]);
// console.timeEnd("Execution Time");

// const startPerformance1 = performance.now();
// solution1([4, 0, 1, -2, 3]);
// const endPerformance1 = performance.now();
// console.log(`Execution time: ${endPerformance1 - startPerformance1} ms`);

console.log(solution1([4, 0, 1, -2, 3]));

// Module 2 – Data Manipulation

// You are given two strings: pattern and source. The first string pattern contains only the symbols 0 and 1, and
// the second string source contains only lowercase English letters.

// Your task is to calculate the number of substrings of source that match pattern.

// We’ll say that a substring source[l..r] matches pattern if the following three conditions are met:
// • The pattern and substring are equal in length.
// • Where there is a 0 in the pattern, there is a vowel in the substring.
// • Where there is a 1 in the pattern, there is a consonant in the substring.

// Vowels are ["a", "e", "i", "o", "u", "y"]. All other letters are consonants.

// Example
// For pattern = "010" and source = "amazing", the output should be solution(pattern, source) = 2.
// • "010" matches source[0..2] = "ama". The pattern specifies "vowel, consonant, vowel". "ama"
// matches this pattern: 0 matches a, 1 matches m, and 0 matches a.
// • "010" doesn’t match source[1..3] = "maz"
// • "010" matches source[2..4] = "azi"
// • "010" doesn’t match source[3..5] = "zin"
// • "010" doesn’t match source[4..6] = "ing"
// So, there are 2 matches.

// For pattern = "100" and source = "codesignal", the output should be solution(pattern, source) = 0.
// • There are no double vowels in the string "codesignal", so it’s not possible for any of its substrings to
// match this pattern.

// Guaranteed constraints:
// • 1 ≤ source.length ≤ 10^3
// • 1 ≤ pattern.length ≤ 10^3

const solution2 = (pattern, source) => {
  let result = 0;
  const vowels = ["a", "e", "i", "o", "u", "y"];

  for (let i = 0; i <= source.length - pattern.length; i++) {
    let match = true;

    for (let j = 0; j < pattern.length; j++) {
      if (
        (!vowels.includes(source[i + j]) && pattern[j] === "0") ||
        (vowels.includes(source[i + j]) && pattern[j] === "1")
      )
        match = false;
    }

    if (match) result += 1;
  }

  return result;
};

// Measure performance
// const startDate2 = Date.now();
// solution2("010", "amazing");
// const endDate2 = Date.now();
// console.log(`Execution time: ${endDate2 - startDate2} ms`);

// console.time("Execution Time");
// solution2("010", "amazing");
// console.timeEnd("Execution Time");

// const startPerformance2 = performance.now();
// solution2("010", "amazing");
// const endPerformance2 = performance.now();
// console.log(`Execution time: ${endPerformance2 - startPerformance2} ms`);

console.log(solution2("010", "amazing"));
// console.log(solution2("100", "codesignal"));

// Module 3 – Implementation Efficiency
// You are given a matrix of integers field of size height × width representing a game field, and also a matrix of inte-
// gers figure of size 3 × 3 representing a figure. Both matrices contain only 0s and 1s, where 1 means that the cell is
// occupied, and 0 means that the cell is free.

// You choose a position at the top of the game field where you put the figure and then drop it down. The figure
// falls down until it either reaches the ground (bottom of the field) or lands on an occupied cell, which blocks it
// from falling further. After the figure has stopped falling, some of the rows in the field may become fully occu -
// pied.

// Your task is to find the dropping position such that at least one full row is formed. As a dropping position, you
// should return the column index of the cell in the game field which matches the top left corner of the figure’s 3 × 3
// matrix. If there are multiple dropping positions satisfying the condition, feel free to return any of them. If there
// are no such dropping positions, return -1.
// Note: The figure must be dropped so that its entire 3 × 3 matrix fits inside the field, even if part of the matrix is
// empty.

// Examples
// For
// field = [
// [0, 0, 0],
// [0, 0, 0],
// [0, 0, 0],
// [1, 0, 0],
// [1, 1, 0]]
// and
// figure = [
// [0, 0, 1],
// [0, 1, 1],
// [0, 0, 1]]
// The output should be solution(field, figure) = 0.
// Because the field is a 3 x 3 matrix, the figure can be dropped only from position 0. When the figure stops
// falling, two fully occupied rows are formed, so dropping position 0 satisfies the condition.

// For
// field =
// [[0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [1, 1, 0, 1, 0],
// [1, 0, 1, 0, 1]]
// and
// figure = [
// [1, 1, 1],
// [1, 0, 1],
// [1, 0, 1]]
// the output should be solution(field, figure) = 2.

// The figure can be dropped from three positions: 0, 1, and 2. As you can see below, a fully occupied row will be
// formed only when dropping from position 2:

const solution3 = (field, figure) => {
  let droppingPosition = -1;

  return droppingPosition;
};

console.log(
  solution3(
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
    [
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1],
    ]
  )
);
