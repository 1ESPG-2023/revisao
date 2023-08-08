//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Júlia", "Marcelo", "Cláudia"];

//Impressão da primeira posição do array:
console.log(nomesAlunos[0]);
//Quebra de linha para melhor vizualização no console:
console.log("\n");

//Imprimindo todos os elementos do array com for:
for(var i = 0; i < nomesAlunos.length; i++){
    //Imprime o valor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //Imprimindo o elemento atual do array:
    console.log("Elemento "+ i + ": ",elemento);
    
    //Imprimindo o elemento atual do array com template String:
    console.log(`Elemento ${i}: `,elemento);
    //Quebrar linha
    console.log("\n");
}

//Quebrar linha
console.log("\n");

//Utilizar um forEach para imprimir o Array:
nomesAlunos.forEach(function(nome){
    console.log(`Nome do aluno: ${nome}`);
})

//Gerar um novo loop para iterar o array e ao mesmo tempo:
//1 - Criar novos elementos na div
//2 - Adicionar cada um dos elementos do array a cada um dos elementos da div

const divLista = document.getElementById("lista-nomes");

//Utilizando o for of para iterar o array
for(const nome of nomesAlunos){
    //Elemento p sendo criado
    let p = document.createElement("p");
    //Texto nome sendo inserido no elemento p
    p.textContent = nome
    //Adicionando elemento p dentro da div lista
    divLista.appendChild(p)
    console.log(nome);
}

//Inserindo novos nomes no array, utilizando os metodos: push e unshift
/*push() -> Insere um ou mais itens ao final do array */
/*unshift() -> Insere um ou mais itens no início do array */

nomesAlunos.push("André");
nomesAlunos.unshift("Hugo");
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log('Array após as modificações:',nomesAlunos );


//Quebrar linha
console.log("\n");
//Removendo o primeiro elemento com shift
nomesAlunos.shift();
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log('Array após as modifiações', nomesAlunos);


//Quebrar linha
console.log("\n");
//Removendo o último elemento com pop
nomesAlunos.pop();
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log('Array após as modificações:',nomesAlunos );