// Declaração de um Array de nome de alunos
let nomesAlunos = ['Ao Mosso','Jão tar','Ah Ross','Lin Gui-sa','Fei John']

// Impressão da primeira posição do array:
console.log(nomesAlunos[0]);

// Quebrar linha para melhor visualização no console;
console.log("\n");

// Imprimindo todos os elementos do Array com for
for (let i= 0;i<nomesAlunos.length ;++i){

    // Imprime o valor atual do elemento na variável "elemento"
    let elemento = nomesAlunos[i];

    // Imprimindo o elemento atual do array:
    // console.log("elemento "+i+ ": ",elemento);

    // Imprimindo o elemento atual do array com template string
    console.log(`Elemento ${i}: `,elemento);
}   
    // Quebrar linha
    console.log("\n");

    //Utilizar um forEach para imprimir o array:
    nomesAlunos.forEach( nome=>{
        console.log(`Nome do aluno: ${nome}`);
    });
