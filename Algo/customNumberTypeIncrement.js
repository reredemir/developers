const main = (num) => {
  //On retourne le tableau pour pouvoir le parcourir dans le bon sens dans un for of
  num.reverse();

  //on incrémente le premier digit
  num[0]++;

  num.forEach((digit, index) => {
    //Si le digit est à 10
    if (digit === 10) {
      //Alors je passe le digit à 0
      num[index] = 0;
      //Ensuite, si le digit est le dernier digit du tableau, j'ajoute un digit '1'
      if (index === num.length - 1) {
        num.push(1);
      } else {
        //Sinon, si le digit n'est pas le dernier digit du tableau, j'incrémente le digit d'après
        num[index + 1]++
      }
    }
  })

  //Je remets le tableau à l'endroit
  num.reverse();

  return num;
}

console.log(main([9, 9]))



