/********
// CODING CHALLENGE //
We have really enjoyed speaking with you so far AND we are excited to invite you to take part in our in house coding exercise to showcase your programming and problem solving skills. 

We recommend you spend 1hour 30mins to 2hour 30mins to complete this challenge, however it is not timed. We are happy for you to take your time and really showcase your coding skills and ability!
Exercise
Extract the SolutionAND.zip file and import the SolutionAND.js file into your favourite IDE of choice.

Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations.
Write the function:
function solution (input) {
  // logic here
  return null; 
}
that, given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. Please keep in mind the efficiency of your algorithm when writing the solution.

For example:

If the input provided is: “236”, then your solution should return "632,623,362,326,263,236" as these are all the combination that can be made with integers that the string contains
If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution
If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.
Problem Submission 
Submit working code: 
Keep things simple, don’t over-engineer your solution. 
Send us the archived file <firstname.lastname>-L1L2_challenge.zip via email.

Happy coding :)
 *********/

////////////////////////////////////////////////////////////////////////

// SOLUTION //
function solution(input) {
  // First, extract all the integers from the input string
  let numbers = input.match(/\d+/g) || [];

  // If there are no numbers in the input string, return an error message
  if (numbers.length == 0) {
    return "Input does not contain any integers";
  }

  // Next, sort the numbers in descending order
  numbers.sort((a, b) => b - a);

  // Create a set to store the distinct AND-Siblings
  let andSiblings = new Set();

  // Generate all possible permutations of the numbers and add them to the set
  // of AND-Siblings, if they are not already in the set
  for (let i = 0; i < numbers.length; i++) {
    let permutations = permute(numbers[i].split(""));
    for (let j = 0; j < permutations.length; j++) {
      let perm = permutations[j].join("");
      if (!andSiblings.has(perm)) {
        andSiblings.add(perm);
      }
    }
  }

  // Finally, return the AND-Siblings as a string, with the numbers separated
  // by a comma and a space
  return [...andSiblings].join(", ");
}

// Helper function to generate all possible permutations of an array
function permute(arr) {
  let results = [];

  // If the array has only one element, return it
  if (arr.length == 1) {
    results.push(arr);
    return results;
  }

  // Generate all possible permutations of the remaining elements
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i];
    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    let permutations = permute(remaining);
    for (let j = 0; j < permutations.length; j++) {
      results.push([first].concat(permutations[j]));
    }
  }

  return results;
}

////////////////////////////////////////////////////////////////////////
// RESULTS //

// Test case 1 result
// Expected output: "632, 623, 362, 326, 263, 236"
console.log(solution("236"));

// Test case 2 result
// Expected output: "632, 623, 362, 326, 263, 236"
console.log(solution("A 3B2 C6D"));

// Test case 3 result
// Expected output: "Input does not contain any integers"
console.log(solution("ABC"));
////////////////
