// declaração de um array de nomes de alunos

let nomeAlunos = ["João", "Lucas", "Pedro", "Bob", "Guilherme"]

// Impressão da primeira posição do array

for (let i = 0; i < nomeAlunos.length ; i++) {
    let elemento = nomeAlunos[i]
    // console.log("Elemento " + i + ": ", elemento)

    //Imprimindo o elemento atual do array com template string
    // console.log(`Elemento ${i}: `, elemento)

}

nomeAlunos.forEach((nome, index) =>{
    console.log(`Nome do aluno: ${index + 1} ${nome}`)
})

//1 - Criar novos elementos na div
//Gerar um novo loop para iterar e ao mesmo tempo
//2 - Adicionar cada um dos elementos do array a cada um dos elementos na div 

//utilizando for of para  iterar o array

const divLista = document.getElementById("lista")

for (const nome of nomeAlunos) {
    let p = document.createElement("p")
    p.textContent = nome
    divLista.appendChild(p)
    console.log(nome)
}

// Adicionando no final do array
nomeAlunos.push("André")
// Adicionando no começo do array
nomeAlunos.unshift("Hugo")

console.log("Após as modificações: ", nomeAlunos)
// Removendo o primeiro elemento da lista
nomeAlunos.shift()
console.log("Após as modificações: ", nomeAlunos)
// removendo o último elemento da lista 
nomeAlunos.pop()
console.log("Após as modificações: ", nomeAlunos)
// Colocando o array em ordem alfabética
nomeAlunos.sort()
console.log("Após as modificações: ", nomeAlunos)
// revertendo a posição dos dados com o método reverse 
nomeAlunos.reverse()
console.log("Após as modificações: ", nomeAlunos)
// Buscando elemetos com indexOf
let index = nomeAlunos.indexOf("Bob")
console.log("Elemento na posição: ",index)
// Alterando um elemento no array com método splice
nomeAlunos.splice(3,1,"Jojo")
console.log("Lista alterada: ",nomeAlunos)

const nomeAtendidos = nomeAlunos.splice(3,2)
console.log("Lista alterada: ",nomeAlunos)

console.log(nomeAtendidos)