//declaração de um array de nomes de alunos

let nomes_alunos = ['Persia','josé','Aline','carlos','julia','Marcelo','Claudia']

//impressão da primeira posição do array

console.log(nomes_alunos[0])


for (let i = 0; i < nomes_alunos.length; i++) {

    let elemento = nomes_alunos[i]
    console.log(`Elemento` + i + ": " ,elemento)

    console.log('\n')
    
}

// each para imprimr array

nomes_alunos.forEach((nome,i) =>{

    console.log(` Nome do aluno ${i} ${nome}`)


})

