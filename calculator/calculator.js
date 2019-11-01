function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	return a.reduce((total, num) => add(total, num), 0);
}

function multiply (arr) {
	return arr.reduce((total, num) => total * num, 1);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let total = 1;
	for (let i = 1; i <= a; i ++){
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}