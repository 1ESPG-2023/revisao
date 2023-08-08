// Declaração de uma array de nomes de alunos:
let nomesAlunos = ["Persia","José","Aline","Carlos","Júlia","Marcelo","Claudia"];

// Impressão da primeira posição do array
console.log(nomesAlunos[0]);
// Quabrar a linha para a melhor vizualização no console
console.log("\n");


// Impriminto todos os elemtnos da Array com for: (tradicional utilizando o índice do array)
for (var i= 0;i<nomesAlunos.length ;++i){
    // Imprime o valor atual do elemento naq viavél "elemento"
    let elemento = nomesAlunos[i];
    // Imprimindo o elemento atual do array:
    console.log("elemeto"+i+ ": ", elemento);
    // Quebra linha
    console.log("\n");
    // Imprimindo o elemento atual do array com template String
    console.log(`elemento $`, elemento);
    // Quebra linha 
    console.log("\n")
    // Utilizar forEach para imprimir array
    // nomesAlunos.forEach(nome,index=>function(){
    //     console.log(`Nome do aluno: ${index} - ${nome}`);
    // });
};

console.log("\n")

//  Gerar um novo loop para iterar o array e ao mesmo tempo 
//  1 - criar novos elementos na div 
//  2- Adicionar cada um dos elementos do array a cada um dos elementos da div (html)

const divLista = document.getElementById("lista-nomes");

// Utilizando o for of para iterar p array
for (const nome of nomesAlunos) {
    // Elemento p sendo criado
    let p = document.createElement("p");
    // texto nome sendo inserido no elemento p 
    p.textContent= nome;
    // Adicionando o elemento p a div lista
    divLista.appendChild(p);
    
    console.log(nome)
}

//  Inserir novos nomes no array, utilizando os métodos: ush e unshift
// push() -> insere um ou mais itens no ao final do array
// unshift() -> insere um ou mais intens no inicio do array
nomesAlunos.push("André");
nomesAlunos.unshift("Hugo");
// mostrando a situação atual do array
console.log('Array após modificações:',nomesAlunos)


// Removendo o primiero elemento com o shift
nomesAlunos.shift();
// mostrando a situação atual 
console.log('Array após modificações:',nomesAlunos)
