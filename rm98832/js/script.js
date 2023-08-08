
//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia","José","Aline","Carlos","Júlia","Marcelo","Claudia"];

//Impressão da primeira posição do array:
console.log(nomesAlunos[0]);
//Quebrar linha para melhor visualização no console:
console.log("\n");

//Imprimindo todos os elementos do array com for:
for (let i= 0;i<nomesAlunos.length ;++i){
    //Imprime o valor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //Imprimindo o elemento atual do array:
    console.log("Elemento "+i+ ": ",elemento);
    
    //Imprimindo o elemento atual do array com template String:
    console.log(`Elemento ${i}: `,elemento);
    //Quebrar linha
    console.log("\n");
}

//ultiilizar um forEach para imprimir o array
nomesAlunos.forEach(nome =>{
    console.log(`nome do aluno : ${nome}`)
});