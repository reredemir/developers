const fizzBuzz = (length) => {
  const numbers = [];

  for (let i = 1; i <= length; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push('FizzBuzz');
    } else if (i % 3 === 0) {
      numbers.push('Fizz');
    } else if (i % 5 === 0) {
      numbers.push('Buzz');
    } else {
      numbers.push(i);
    }
  }
  return numbers.join(', ');
};

console.log(fizzBuzz(45));

module.exports = fizzBuzz;