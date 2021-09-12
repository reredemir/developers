const fizzBuzz = (length) => {
  // Je crée un tableau vide qui contiendra les nombres, les fizz, les buzz ou les fizzbuzz.
  const numbers = [];

  // Je boucle sur le tableau en fonction du nombre (length) qui a été passé en argument lors de l'appel de la fonction fizzBuzz(length),
  // et j'incrémente i de 1 à chaque tour de boucle en initialisant i à 1
  for (let i = 1; i <= length; i += 1) {
    // Si i est divisible par 3 ET par 5 et je push 'FizzBuzz',
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push('FizzBuzz');

      // si i est divisible par 3 et je push 'Fizz' dans le tableau,
    } else if (i % 3 === 0) {
      numbers.push('Fizz');

      // si i est divisible par 5 et je push 'Buzz' dans le tableau,
    } else if (i % 5 === 0) {
      numbers.push('Buzz');

      // sinon, si i n'est divisible ni par 3 ou par 5 alors je push i dans le tableau.
    } else {
      numbers.push(i);
    }
  }

  // Je renvoie number et j'utilise .join pour renvoyer une string à la place d'un tableau pour une meilleure lisibilité du résultat en console
  return numbers.join(', ');
};

console.log(fizzBuzz(45));

module.exports = fizzBuzz;
