//declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Júlia", "Marcelo", "Claudia"]

//impressão da primeira posição do array:
console.log(nomesAlunos[0]);
//quebrar linha para melhor visualização no console:
console.log("\n");

//imprimindo todos os elementos do array com for:
for(let i= 0;i<nomesAlunos.length ;++i){
    //imprime o valor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //imprimindo o elemento atual do array:
    console.log("Elementos "+i+ ": ",elemento);
    //imprimindo o elemento atual do array com template string:
    console.log(`Elementos ${i}: `,elemento);
    //quebrar linha
    console.log("\n");

}

//quebrar linha
console.log("\n");

//utilizar um foreach para imprimir o array:
nomesAlunos.forEach( (nome,index) =>{
    console.log(`Nome do aluno : ${index + 1} - ${nome}`);
});

//utilizar um foreach com função anonima para imprimir array: