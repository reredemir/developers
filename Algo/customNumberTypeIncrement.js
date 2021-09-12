const customNumberTypeIncrement = (num) => {
  //On retourne le tableau pour pouvoir le parcourir dans le bon sens dans un for of
  num.reverse();

  //On incrémente le premier digit
  num[0]++;

  num.forEach((digit, index) => {
    //Si le digit est à 10
    if (digit === 10) {
      //alors je passe le digit à 0
      num[index] = 0;
      //ensuite, si le digit est le premier digit du tableau, j'ajoute un digit '1'
      if (index === num.length - 1) {
        num.push(1);
      } else {
        //sinon, si le digit n'est pas le prermier digit du tableau, j'incrémente le digit d'après
        num[index + 1]++;
      }
    }
  });

  //Je remets le tableau à l'endroit
  num.reverse();

  return num;
};

console.log(customNumberTypeIncrement([9, 9]));

module.exports = customNumberTypeIncrement;
