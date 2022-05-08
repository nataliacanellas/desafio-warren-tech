/*
  Desafio 02 
Um professor de programação, frustrado com a falta de disciplina de seus alunos, decidi cancelar a aula se 
menos de x alunos estiverem presentes quando a aula for iniciada. O tempo de chegada varia entre:

Normal: tempoChegada <= 0
Atraso: tempoChegada > 0

Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina
 se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).
*/

const x = 3
const arrivalTime = [-2, -1, 0, 1, 2]

const question2 = () => {
  let i = 0
  arrivalTime.forEach((item) => {
    if (item <= 0) {
      i++
    }
  })
  if (i >= x) {
    console.log("Aula normal")
  } else {
    console.log("Aula cancelada")
  }
}

question2()