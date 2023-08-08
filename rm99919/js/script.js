//Declaração de um array de nome de alunos
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Julia","Macelo", "Claudia"]
//Imprimindo todos os elementos do array com FOR
for(var i=0; i<nomesAlunos.length; ++i){
    let elemento = nomesAlunos[i]
    
    console.log(`Elemento ${i}: ${elemento}`);
    console.log("\n")
}

nomesAlunos.forEach( (nome, index) =>{
    console.log(`Nome do aluno ${index + 1} : ${nome}`)
})


//Gerar novo loop para iterar o array e ao mesmo tempo
// 1 -  criar novos elementos na div
// 2 - adicionar cada um dos elementos do array a cada um dos elementos da div

const divLista = document.getElementById('lista-nomes')
//Ultilizando o For of 
for (const nome of nomesAlunos) {
    //Elemento p sendo criado
    let p = document.createElement("p");
    // Texto sendo inserido no P
    p.textContent = nome
    //Adicionando o P na Div Lista
    divLista.appendChild(p)
    console.log(nome)
    
}

nomesAlunos.push("Andre");
nomesAlunos.unshift("Hugo");
nomesAlunos.shift();//remove primeiro nome
nomesAlunos.pop()//remove ultimo nome
nomesAlunos.sort()//Ordem alfabetica
nomesAlunos.reverse()//Revertendo os dados
console.log(nomesAlunos)

let index = nomesAlunos.indexOf("Claudia")
console.log(index)

//alterano um alemento no array com splice
nomesAlunos.splice(3, 2, "jojo", "juju")
console.log(nomesAlunos)


