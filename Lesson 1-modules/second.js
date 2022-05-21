'use strict'

/**Among Us Imposter Formula
Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage. */
function imposterFormula(i, p) {
	return Math.round(100 * (i / p));
}

// console.log(imposterFormula(1, 10)); // ➞ 10
// console.log(imposterFormula(2, 5)); // ➞ 40
// console.log(imposterFormula(1, 8)); // ➞ 13

export {imposterFormula};