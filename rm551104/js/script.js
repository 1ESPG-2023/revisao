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

