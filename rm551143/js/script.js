//declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Júlia", "Marcelo", "Claudia"]

//impressão da primeira posição do array:
console.log(nomesAlunos[0]);
//quebrar linha para melhor visualização no console:
console.log("\n");

//imprimindo todos os elementos do array com for:
for(let i= 0;i<nomesAlunos.length ;++i){
    //imprime o valor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //imprimindo o elemento atual do array:
    console.log("Elementos "+i+ ": ",elemento);
    //imprimindo o elemento atual do array com template string:
    console.log(`Elementos ${i}: `,elemento);
    //quebrar linha
    console.log("\n");

}

//quebrar linha
console.log("\n");

//utilizar um foreach para imprimir o array:
nomesAlunos.forEach( (nome,index) =>{
    console.log(`Nome do aluno : ${index + 1} - ${nome}`);
});

//quebrar linha
console.log("\n");

//gerar novo loop para iterar o array e ao mesmo tempo
// 1 - criar novos elementos na div
// 2 - adicionar cada um dos elementos do array a cada um dos elementos da div

const divlista = document.getElementById("lista-nomes");

// utlizando o for of para iterar o array
//loop - acontece o número de vezes que for o tamanho do array
for (const nome of nomesAlunos) {
    // elemento p sendo criado
    let p = document.createElement("p");
    // texto nome sendo inserido no elemento p
    p.textContent = nome;
    // adicionando o elemento p dentro da div lista 
    divlista.appendChild(p);

    console.log(nome);

}

//quebrar linha
console.log("\n");

//inserir novos nomes no array, utilizando novos métodos: push e unshift
/*push() -> insere um ou mais itens no final d array */
/*unshift() -> insere um ou mais itens no inicio do array*/
nomesAlunos.push("André");
nomesAlunos.unshift("Hugo");
// imprimindo o array depois das alterações realizadas nos metodos acima:
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
//removendo o primeiro elemento com shift
nomesAlunos.shift();
//imprimindo o array depois das alterações realizadas nos metodos acima:
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
//removendo o último elemento com shift
nomesAlunos.pop();
//imprimindo o array depois das alterações realizadas nos metodos acima:
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
//colocando os dados em ordem alfabetica com o metodo sort
nomesAlunos.sort();
//imprimindo o array depois das alterações realizadas nos metodos acima:
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
//revertendo a posição dos dados com o metodo reverse
nomesAlunos.reverse();
//imprimindo o array depois das alterações realizadas nos metodos acima:
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
//buscando elementos com indexof
let index = nomesAlunos.indexOf("Claudia");
//retorna -1 caso não encontrar
//imprimindo o array depois das alterações realizadas nos metodos acima:
console.log('Array após as modificações:',nomesAlunos);
console.log('Posição onde o elemento foi encontrado:',index);

//quebrar linha
console.log("\n");
// alterando um elemento do array com o metodo splice
nomesAlunos.splice(3,1,"Jojo");
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
// alterando um elemento do array com o metodo splice e solicitando mais uma alteração
//imprimindo o array depois das alterações realizadas nos metodos acima:
nomesAlunos.splice(3,2,"Tuca");
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
// remover um elemento do array com o metodo splice
//imprimindo o array depois das alterações realizadas nos metodos acima:
nomesAlunos.splice(1,1);
console.log('Array após as modificações:',nomesAlunos);

//quebrar linha
console.log("\n");
// remover um elemento do array com o metodo splice utilizando o metodo indexOf como parametro
//imprimindo o array depois das alterações realizadas nos metodos acima:
let indexNome = nomesAlunos.indexOf("Tuca");
nomesAlunos.splice(indexNome,1);
console.log('Array após as modificações:',nomesAlunos);


