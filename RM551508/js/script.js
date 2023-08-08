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



// Gerar um novo loop para interar o array e ao msm tempo 
// 1- criar novos elementos na div 
// 2 - adicionar cada um dos elementos do array a cada um dos elementos da div 

// recuperando elemento do html
const div_lista = document.getElementById("lista-nomes")


// utilizando o forOF para interar o array 
for (const nomes of nomesAlunos) {
    let p = document.createElement('p');
    p.textContent = nomes
    div_lista.appendChild(p)
    console.log(nomes)
}

nomesAlunos.push("las hana")
nomesAlunos.unshift("al fahsee")
nomesAlunos.sort()
console.log(`nomes: ${nomesAlunos}`)


// O método indexOf retorna qual posição tal item ta no array
let index = nomesAlunos.indexOf("I-pim")
console.log(`Posição onde o elemento foi encontrado ${index}`)

// alterando um elemento no array com o método splice 
nomesAlunos.splice(3, 1, "I pim")
console.log(nomesAlunos)

