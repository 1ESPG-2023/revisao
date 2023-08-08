//Declaração de um array de nomes de alunos:
let nomesAlunos = ["persia", "José", "Carlos", "Julia", "Claudia"]

//Impressão da primeira posição do array:
console.log(nomesAlunos[0])

//Quebrar linha:
console.log("\n")

//Imprimindo todos os elementos do array com for:
for (var i =0; i < nomesAlunos.length; i++) {
    //Imprime o valor atual do elemento na variável "elemento"
    let elemento = nomesAlunos[i]

    //imprimindo o elemento atual do array:
    console.log("Elemento "+ i + ": ", elemento)

    //Imprimindo com template string:
    console.log(`Elemento ${i}: `, elemento)
}

//Quebrar linha:
console.log("\n")

//utilizar um forEach para imprimir o array:
nomesAlunos.forEach( (nome,index) =>{
    console.log(`Nome do Aluno: ${index + i} - ${nome}`)
})

