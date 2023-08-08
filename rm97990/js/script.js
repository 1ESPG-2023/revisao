//Declaração de um array de nomes
let nomes=["Mirella", "Ge", "Lana", "Fe"]

//Impressão da primeira posição do array
console.log(nomes[0]);
//Queba linha para melhor visualização no console
console.log("\n");
//Imprimindo todos os elementos do array com for:
for(var i=0;i<nomes.length ;++i){
    //Imprime o valor atual do elemento da variavel elemento
    let elemento = nomes[i];
    //Imprimindo o elemento atual do array
    console.log("Elemento"+i+":",elemento);
    //Imprimino o elemento atual do array com template string
    console.log(`Elemento ${i}:` ,elemento)

    //Utilizar o forEach para imprimir o array
    nomes.forEach(nome=()=>{
        console.log(`Nome da pessoa: ${nomes}`)
    });

    //Mesma função acima, gerando um indice
    nomes.forEach((nome,index)=>{
        console.log(`Nome da pessoa: ${index + 1} - ${nomes}`)
    });
}

    //Quebrar linha
    console.log("\n");

//Gerar um novo loop para inteirar o array e ao mesmo tempo:
//1 - Criar novos elementos na div
//2-Adicionar cada um dos elementos do array a cada um dos elementos da div

//Recuperando a div através do getElementByID
const divLista=document.getElementById("lista-nomes")

//Utilizando o for of para iterar o array; o objeto é o array; iterator: elementos que vão ser tirados do array
for (const nome of nomes) {
   //Elemento p sendo criado
    let p = document.createElement("p"); 
    //Texto nome sendo inserido no elemento p
    p.textContent = nome; 
    //Adicionando o elemento p dentro da  divLista
    divLista.appendChild(p);

    console.log(nome)
}

//Quebrar linha
console.log("\n");
//Inserir novos nomes no array utilizando os métodos: push e unshift
//push(): Insere um ou mais itens no FINAL do array
//unshift(): Insere um ou mais itens no INÍCIO do array
nomes.push("Jose")
nomes.unshift("Andreia")
//Imprimindo o array depois das alterações
console.log(nomes)

//Quebrar linha
console.log("\n");
//Métodos para remover elementos do array: removendo o primeiro elemento com shift
nomes.shift();
console.log("Array com remoção: ", nomes)


