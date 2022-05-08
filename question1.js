/*
  Desafio 01 
 
Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números ímpares. 
Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.

Existem 120 números reversíveis abaixo de 1000.

Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.
 */


const limit = 1000000;

function revertNumber(n){
  var digit, result = 0
  while( n ){
      digit = n % 10  
      result = (result * 10) + digit 
      n = n/10|0 
  }  
  return result
}

function question1 () {
  let i = [];
  for (let counter = 1; counter < limit; counter++) {
    const revertCounter = revertNumber(counter);
    if (counter % 10 !== 0) {
      let sum = counter + revertCounter;
      if (sum % 2 !== 0 ) {
        let arrayNumber = sum.toString().split("");
        let hasEvenNumber = arrayNumber.find((number) => number % 2 === 0)
        if(!hasEvenNumber) {
          i.push(revertCounter)
          console.log(counter)        
        }
      }
    }
  }
  console.log(`Quantidade de numeros encontrados dentro de ${limit}: ${[...new Set(i)].length}`)
}

question1();
