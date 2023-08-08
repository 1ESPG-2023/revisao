//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Julia", "Marcelo", "Claudia"]

//Impressão da primeira posição do array:
console.log(nomesAlunos[0]);
//Quebrar linha para melhorar vizualização no console:
console.log("\n")

//Imprimindo todo os elementos do Array com for:
for(let i=0; i<nomesAlunos.length; ++i) {
    // ?Imprime o valor atual do elemento na variável "elemento"
    let elemento = nomesAlunos[i]
    //Imprimindo o elemento atual do array
    console.log("Elementos "+i+":", elemento);
    
    //Imprimindo o elemento atual do array com template string
    console.log(`Elementos ${i}`, elemento)
    //Quebrar linha
    console.log("\n")

}

//Quebrar linha
console.log("\n")

//Ultilizar foreach para imprimir o array:
nomesAlunos.forEach((nome, index) =>{
    console.log(`Nome do aluno: ${index+1} - ${nome}`);
});

//Quebrar linha
console.log("\n")

//Gerar um novo loop para iterar o array e ao mesmo tempo
//1- Criar novos elementos na div
//2- Adicionar cada um dos elementos do array a cada um dos elementos da div

const divLista = document.getElementById("lista-nomes")

//Utilizando o for of para iterar o array
// o object na estrutura do for of é o array que vou utilizar
for (const nome of nomesAlunos) {
    //elemento p sendo criado
    let p = document.createElement("p");
    //Texto nome sendo inserido no elemento p
    p.textContent = nome;
    //Adicionando o elemtno p dentro da div lista
    divLista.appendChild(p);

    console.log(nome);
    
}

//Quebrar linha
console.log("\n")

//Inserir novos nomes no array utilizando os métodos: push e unshift
/*Push - insere um ou mais itens ao final fo array*/
/*Unshift - Insere um ou mais itens no inicio do array*/
nomesAlunos.push("André");
nomesAlunos.unshift("Hugo");
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log("Array após as modificações", nomesAlunos);

//Quebrar linha
console.log("\n")

//Removendo o primeiro alemento com shift
nomesAlunos.shift();
console.log("Array após as modificações", nomesAlunos);
