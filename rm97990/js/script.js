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
//Gerar um novo loop para inteirar o array e ao mesmo tempo:
//1 - Criar novos elementos na div
//2-Adicionar cada um dos elementos do array a cada um dos elementos da div



