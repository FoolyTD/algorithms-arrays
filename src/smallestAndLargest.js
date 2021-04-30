/**
 * Implement an algorithm that sorts the array then returns the smallest and largest
 */
function largestAndSmallestSort(numbers) {
    // if empty array, return []
    if(numbers.length === 0) return numbers;
    //sort the numbers in the array in ascending order
    //return the first and last element in the array
    numbers.sort((a,b) => Math.abs(a) - Math.abs(b));
    console.log(numbers);
    return [numbers.shift(), numbers.pop()];
}

/**
 * Implement an algorithm that uses iteration to find the smallest and largest
 */
function largestAndSmallestIterate(numbers) {
    // set the highest and lowest numbers to infinity and -infinity
    // loop through the numbers and set the highest and lowest as you loop through
    if(numbers.length === 0) return numbers;
    let highest = -Infinity;
    let lowest = Infinity;
    for (let number of numbers) {
        if (number > highest) {
            highest = number;
        }
        if (number < lowest) {
            lowest = number;
        }
    }
    return [lowest,highest];
}

module.exports = { largestAndSmallestIterate, largestAndSmallestSort };
