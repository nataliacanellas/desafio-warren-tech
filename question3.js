/*
  Desafio 3
Dado um vetor de números e um número n. Determine a soma com o menor número de elementos
entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. 
Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.
*/

const N = 10
const V = [2, 3, 4]

const question3 = () => {
  let combinations = [];

  const addToCombinationWithLeftOver = (leftover,foundLeftover,times,item ) => {
    let maxLeftover = Math.max(...foundLeftover)
    let timesLeftover = leftover / maxLeftover
    let combination = [...new Array(times).fill(item), ...new Array(timesLeftover).fill(maxLeftover)]
    combinations.push(combination)
  }

  V.forEach((item) => {
    if (item > N) return
    if (N % item === 0) {
      let times = N / item
      let combination = new Array(times).fill(item);
      combinations.push(combination)
    } else {
      let times = Math.floor(N / item)
      let leftover = N % item
      let foundLeftover = V.filter((other) => leftover % other === 0)
      if (foundLeftover.length) {
        addToCombinationWithLeftOver(leftover,foundLeftover,times,item)
      } else {  
        times-- 
        if(times == 0) return
        leftover += item
        foundLeftover = V.filter((other) => leftover % other === 0)
        addToCombinationWithLeftOver(leftover,foundLeftover,times,item)
      }
    }
  })

  console.log(combinations.reduce((result,array)=>{
    if(result.minLength === 0 ) return {minLength: array.length, result: [array]}
    if(array.length < result.minLength) {
      return { minLength: array.length, result: [array] }
    } else if (array.length === result.minLength) {
      return {...result, result: [...result.result, array]}
    }
  }, { minLength: 0, result: [] }).result)
}

question3()