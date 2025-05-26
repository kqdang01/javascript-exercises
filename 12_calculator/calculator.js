const add = function(num,num2) {
  return num + num2;
};

const subtract = function(num,num2) {
	return num - num2;
};

const sum = function(arr) {
	return arr.reduce((total, num) => num + total,0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => num * total,1);
};

const power = function(num,num2) {
	return num**num2;
};

const factorial = function(num) {
  if (num === 1 || !num)
  {
    return 1;
  }
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
