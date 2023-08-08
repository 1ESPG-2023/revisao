// delaração de um array de nomes de alunos 

let nomeAlunos = ["Persia", "Aline", "Jose", "Carlos","Julia","Marcelo", "Claudia"];

//impressaõ da primeira posição do array 
conseole.log(nomeAlunos[0]);

//quebrar linha pra melhor vizualização no console 
console.log("\n");

//imprimindo todos os elementos do array com for: 
for (var i=0;<nomeAlunos.length ;++i){
    //imprime o valor atula do elemento na variavel 
    let elemento = nomeAlunos[i];

    //imprimindoo elemento atual no array 
    console.log("Elemento"+i+ ",elemento");

    //quebra linha 
    console.log("\n")

    //imprimindo o elemento atual do array com tamplate string
    console.log(`Elemento ${i}`, elemento);
    //quebra linha 

    console.log("\n")
    //quebra linha 
    console.log("\n")

    //utilizar um forEach para imprimir o Array:
    nomeAlunos.forEach( (nome, index)=>{
        console.log(`Nome do Aluno : ${index+1} - ${nome}`);
    });
}
