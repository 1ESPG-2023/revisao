//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Geovanna", "Mirella", "Lana", "Fernanda", "Júlia", "Marcelo", "Cláudia"];

//Impressão da primeira impressão do array:
console.log(nomesAlunos[0]);
//Quebrar linha para melhor visualização no console;
console.log("\n");

//Imprimindo todos os elementos do array com for:
for(var i=0;i<nomesAlunos.length ;++i){
    //Imprime  alor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //Imprime o elemento atual do array:
    console.log("Elemento "+i+ ": ",elemento);
    //Imprimindo o elemento atual do aray com template String:
    console.log(`Elemento ${i}: `, elemento);
}
    //Quebrar linha
    console.log("\n");

    //Utilizar um forEach para imprimir o Array:
    nomesAlunos.forEach((nome, index) =>{
        console.log(`Nome do aluno : ${index + 1} - ${nome}`);
    });

    //Gerar um novo loop para iterar o array e ao mesmo tempo
    // 1 - Criar npovos elementos na div
    // 2 - Adicionar cada um dos elementos do array a cada um dos elementos da div

    const divLista = document.getElementById("lista-nomes");

    //Utilizando o for of para itinerar o array
    for (const nome of nomesAlunos){
        //Elemento p sendo criado
        let p = document.createElement("p");
        //Texto nome sendo inserido no elemento p
        p.textContent = nome;
        //Adicionando o elemento p dentro da div lista
        divLista.appendChild(p);

        console.log(nome);
    }

    //Inserir novos nomes no array utilizando os metodos: push e unshift
    /*push() -> Insre um ou mais itens no ao final array*/
    /*unshift()-> Insere um ou mais itens no inicio do array*/
    nomesAlunos.push("André");
    nomesAlunos.unshift("Hugo");
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    //Removendo o PRIMEIRO elemento com shift
    nomesAlunos.shift();
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    //Removendo o ULTIMO elemento com shift
    nomesAlunos.pop();
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    console.log("\n")
    //Colocando os dados em ordem alfabetia com o metodo sort
    nomesAlunos.sort();
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    console.log("\n")
    //Revertendo a posição dos daods com o metodo reverse
    nomesAlunos.reverse();
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    console.log("\n")
    //Buscando elementos com o indexof
    let index = nomesAlunos.indexOf("Geovanna");
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);
    console.log('Posição onde o elemento foi encontrado',index);

    console.log("\n")
    //Alterando um elemento no array com o metodo splice
    nomesAlunos.splice(3,1,"Jojo");
    //(posição, quantidade de vezes alteradas, qual será a alteração)
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    //Alterando um elemento no array com o metodo splice e solicitando mais uma alteração.
    nomesAlunos.splice(3,2,"Tuca");
    //(posição, quantidade de vezes alteradas, qual será a alteração)
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    console.log("\n")
    //Remover um elemento no array com o método splice
    nomesAlunos.splice(1,1);
    //(posição, quantidade de vezes alteradas, qual será a alteração)
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

    console.log("\n")
    //Alterando um elemento no array com o metodo splice utilizando o metodo indexof como parâmetro.
    let indexNome = nomesAlunos.indexOf("Tuca");
    nomesAlunos.splice(indexNome,1);
    //(posição, quantidade de vezes alteradas, qual será a alteração)
    //Imprimindo o array depois das alterações realizadas nos metodos acima:
    console.log('Array após as modificações:',nomesAlunos);

