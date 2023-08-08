// Declaração de um Array de nomes de alunos:
let nomesAlunos = ["Pérsia", "José", "Aline", "Carlos", "Júlia", "Marcelo", "Claúdia"];

// Impressão da primeira posição do Array:
console.log(nomesAlunos[0]);

// Imprimindo todos os elementos do Array com o loop for:
for(var i = 0; i<nomesAlunos.length; i++){
    let elemento = nomesAlunos[i];
    console.log(`${i+1}° Nome: `, elemento);
};

// Fazendo a mesma coisa acima, mas desta vez com o for each:
nomesAlunos.forEach(nome =>{
    console.log(`Nome do aluno: ${nome}`)
});