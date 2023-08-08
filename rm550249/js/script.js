//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Julia", "Marcelo", "Claudia"]

//Impressão da primeira posição do array
console.log(nomesAlunos[0]);
//Quebrar linha para melhor visualização no console:
console.log("\n");
//Imprimindo todos os elementos do array com for:
for (var i= 0;i<nomesAlunos.length ;++i){
    //imprime o valor atual do elemento na variável "elemento"
    let elemento = nomesAlunos[i];
    //imprimindo o elemento atual do array:
    console.log("Elemento "+i+ ": ",elemento);
    //imprimindo o elemento atual do array com template Sting:
    console.log(`Elemento ${i}: `,elemento);
    //Quebrar linha
    console.log("\n");
}

    //Quebrar linha
    console.log("\n");

    //Utilizar um forEach para imprimir o Array:
    nomesAlunos.forEach( (nome, index) =>{
        console.log(`Nome do aluno : ${index + 1} - ${nome}`);     
    })