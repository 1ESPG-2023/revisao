// Declaração de um Array de nomes de alunos:
let nomesAlunos = ["Pérsia", "José", "Aline", "Carlos", "Júlia", "Marcelo", "Claúdia"];

// Impressão da primeira posição do Array:
console.log(nomesAlunos[0]);

console.log("\n");

// Imprimindo todos os elementos do Array com o loop for:
for(var i = 0; i<nomesAlunos.length; i++){
    let elemento = nomesAlunos[i];
    console.log(`${i+1}° Nome (for): `, elemento);
};

console.log("\n");

// Fazendo a mesma coisa acima, mas desta vez com o for each:
nomesAlunos.forEach(nome =>{
    console.log(`Nome do aluno (forEach): ${nome}`);
});

console.log("\n");

// Gerar um novo loop para iterar o Array e ao mesmo tempo:
// 1 - Criar novos elementos na div
// 2 - Adicionar cada um dos elementos do array a cada um dos elementos da div

const divLista = document.getElementById("lista-nomes");

// Utilizando o for of para iterar o Array:
for (const nome of nomesAlunos) {
    let p = document.createElement("p");
    p.textContent = `Nome do Aluno (for of): ${nome}`;
    divLista.appendChild(p);
}

//Inserirndo novos nomes no Array, mas utilizando os métodos push (no final do Array) e unshift (no início do Array):
nomesAlunos.push("André");
nomesAlunos.unshift("Hugo");
console.log("Array após o push e o unshift:", nomesAlunos);

//Removendo o primeiro elemento com o shift:
nomesAlunos.shift();
console.log("Array após o shift:", nomesAlunos);

//Removendo o último elemento com o pop:
nomesAlunos.pop();
console.log("Array após o pop:", nomesAlunos);