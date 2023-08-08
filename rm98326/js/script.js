//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Carlos", "Julia", "Claudia"]

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

//Quebrar linha:
console.log("\n")

//Gera um novo loop para iterar o array e ao mesmo tempo
// 1 - Criar novos elementos na div
// 2 - Adicionar cada um dos elementos do array a cada um dos elementos da div

const divLista = document.getElementById("lista-nomes")

//Utilizando o for of para iterar o array
for(const nome of nomesAlunos) {
    //Elemento p sendo criado
    let p = document.createElement("p")

    //Texto nome sendo inserido no elemento p
    p.textContent = nome

    //Adicionando o elemento p na div Lista 
    divLista.appendChild(p)
    
    console.log(nome)
}

//Quebrar linha:
console.log("\n")

//Inserir novos nomes no array, utilizando os métodos: push e unshift
/*push() -> Insere um ou mais itens no final do array*/
/*unshift() -> Insere um ou mais itens no início do array*/
nomesAlunos.push("André")
nomesAlunos.unshift("Hugo")
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")

//Removendo o primeiro elemento com shift
nomesAlunos.shift()
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")

//Removendo o último elemento com pop
nomesAlunos.pop()
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")


//Colocando os dados em ordem alfabética com o método sort.
nomesAlunos.sort()
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")

//Revertendo a posição dos dados com o método reverse.
nomesAlunos.reverse()
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")


//Buscando elementos com indexOf
let index = nomesAlunos.indexOf("Claudia")
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)
console.log("Posição onde o elemento foi encontrado: ", index)

//Quebrar linha:
console.log("\n")



//Alterando um elemento no array com o método splice
nomesAlunos.splice(3,1,"Jojo")
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")

//Alterando um elemento no array com o método splice e solicitando mais uma alteração
nomesAlunos.splice(3,2,"Tuca")
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")

//Removendo um elemento no array com o método splice
nomesAlunos.splice(1,1)
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)

//Quebrar linha:
console.log("\n")

//Removendo um elemento no array com o método splice utilizando o método indexOf como parâmetro
let indexNome = nomesAlunos.indexOf("Tuca")
nomesAlunos.splice(indexNome,1)
//Imprimindo o array
console.log("Array após as modificações: ", nomesAlunos)