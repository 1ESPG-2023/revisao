
//declarando variaveis com omes de aluno

let nomesAlunos = ["Persia","Jose","Aline","Carlos","Julia","Marcelo","Claudia"]


// impressao da primeira posição do array

console.log(nomesAlunos[0],"\n");

//todos os elementos do array com for:

for (let i= 0;i<nomesAlunos.length;++i){
    let elemento = nomesAlunos[i]
    //imprimindo o elementro atual (i) do array
    console.log("Elemento"+i+": ",elemento)
    //imprimindo elemento com template string
    console.log(`Elemento${i}: `,elemento)
    console.log("\n")
    console.log("\n")
}

nomesAlunos.forEach((nome,index)=>{
    console.log(`Nome do aluno : ${index + 1}- ${nome}`)
})