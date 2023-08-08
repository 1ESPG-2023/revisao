//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Geovanna", "Mirella", "Lana", "Fernanda", "Júlia", "Marcelo", "Cláudia"];

//Impressão da primeira impressão do array:
console.log(nomesAlunos[0]);
//Quebrar linha para melhor visualização no console;
console.log("\n");

//Imprimindo todos os elementos do array com for:
for(var i=0;i<nomesAlunos.length ;++i){
    //Imprime  alor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //Imprime o elemento atual do array:
    console.log("Elemento "+i+ ": ",elemento);
    //Imprimindo o elemento atual do aray com template String:
    console.log(`Elemento ${i}: `, elemento);
}
    //Quebrar linha
    console.log("\n");

    //Utilizar um forEach para imprimir o Array:
    nomesAlunos.forEach((nome, index) =>{
        console.log(`Nome do aluno : ${index + 1} - ${nome}`);
    });
    

