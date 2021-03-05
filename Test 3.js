
/**
* @param {Array} array
* @param {Number} delimeter
* @returns {Array}
*/
var checkArray = function(array, delimeter = 3) {
	if (!Array.isArray(array) || typeof delimeter !== "number") {
		return [];
	}
	let validValues = [];
	for (let i = 0; i < array.length; i++) {
		let arrayElement = array[i];
		if (typeof arrayElement !== "number") {
			continue;
		};
		let divisionRemainder = arrayElement % delimeter;
		if (divisionRemainder === 0) {
			validValues.push(arrayElement);
		};
	};
	return validValues;
};
console.log(checkArray([1,2,12,25,16,18]));