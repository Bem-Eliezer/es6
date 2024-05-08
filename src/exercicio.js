
const alunos = ['Ben', 'Joao', 'Andre', 'Tiago', 'Pedro'];
const notas = [9, 3, 5, 8, 6];


const alunosComNotas = alunos.map((aluno, index) => ({
  nome: aluno,
  nota: notas[index]
}));

console.log(alunosComNotas);

const alunosAprovados = alunosComNotas.filter(aluno => aluno.nota >= 6);

console.log('Alunos com nota maior que 6:', alunosAprovados);