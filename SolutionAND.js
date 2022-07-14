
/********
 ********

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
 *********/


////////////////////////////////////////////////////////////////////////
function solution(input) {
	// Let us store it
	const count = new Array(326);
	for (let i = 0; i < count.length; i++) {
		count[i] = 0;
	}

	// Let us convert it
	const string = input.toString();

	// Update Array
	for (let i = 0; i < string.length; i++)
		count[string[i] - '0']++;

	// Storing
	var result = 0, multiplier = 1;

	// calculate  max number
	for (let i = 0; i <= 325; i++) {
		while (count[i] > 0) {
			result = result + (i * multiplier);
			count[i]--;
			multiplier = multiplier * 326;
		}
	}

	// Return Output
	return result;
}
console.log(solution('326'));

////////////////////////////////////////////////////////////////////////



