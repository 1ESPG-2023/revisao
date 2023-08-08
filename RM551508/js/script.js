// Declaração de um arrays de nomes de alunos 
let nomesAlunos = ['Feh Jam', 'Fran-GOO', 'Kos-Teh-Lah', 'Al Ross', 'To Muchee', 'I-pim','Lin-Gui-San']


// Exibir nome
console.log(nomesAlunos[0])
console.log('\n')


// Imprimindo todos os elementos do array com 'for' normal
for(let i = 0; i<nomesAlunos.length; i++){
    let elemento = nomesAlunos[i]
    console.log(`jogador ${i}: ${elemento}`)
}

// Usando forEach para imprimir tbm
nomesAlunos.forEach((nome,index)=>{
    console.log(`nome do aluno ${index + 1} ${nome}`)
})

