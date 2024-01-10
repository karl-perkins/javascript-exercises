const sumAll = function (num1, num2) {
	// Confirm that both arguments are positive integers
	if (
		num1 < 1 ||
		typeof num1 != "number" ||
		num2 < 1 ||
		typeof num2 != "number"
	) {
		return "ERROR";
	}

	const args = [num1, num2].sort();

	let sum = 0;

	for (let i = args[0]; i <= args[1]; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
