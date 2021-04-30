/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
    // loop through the array from 1 to n.length, return the number that is not in the array
    for (let i = 1; i <= numbers.length + 1; i++) {
        if(!numbers.includes(i)) {
            return i;
        }
    }
    return null;
} // [5, 2, 4, 1]

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
    // sum of number equals n*n-1/2
    // sum all the numbers in numbers
    // the difference will be the missing number
    const sum = ((numbers.length + 1) * (numbers.length + 2)) / 2;
    let trueSum = 0;
    numbers.forEach((number) => trueSum += number);
    return sum - trueSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
