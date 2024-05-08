"use strict";

var alunos = ['Ben', 'Joao', 'Andre', 'Tiago', 'Pedro'];
var notas = [9, 3, 5, 8, 6];
var alunosComNotas = alunos.map(function (aluno, index) {
  return {
    nome: aluno,
    nota: notas[index]
  };
});
console.log(alunosComNotas);
var alunosAprovados = alunosComNotas.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log('Alunos com nota maior que 6:', alunosAprovados);