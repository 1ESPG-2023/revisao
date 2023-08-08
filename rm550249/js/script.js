//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Julia", "Marcelo", "Claudia"]

//Impressão da primeira posição do array
console.log(nomesAlunos[0]);
//Quebrar linha para melhor visualização no console:
console.log("\n");
//Imprimindo todos os elementos do array com for:
for (var i= 0;i<nomesAlunos.length ;++i){
    //imprime o valor atual do elemento na variável "elemento"
    let elemento = nomesAlunos[i];
    //imprimindo o elemento atual do array:
    console.log("Elemento "+i+ ": ",elemento);
    //imprimindo o elemento atual do array com template Sting:
    console.log(`Elemento ${i}: `,elemento);
    //Quebrar linha
    console.log("\n");
}

    //Quebrar linha
    console.log("\n");

    //Utilizar um forEach para imprimir o Array:
    nomesAlunos.forEach( (nome, index) =>{
        console.log(`Nome do aluno : ${index + 1} - ${nome}`);     
    });

    //Quebrar linha
    console.log("\n");

    //Gerar um novo loop para iterar o array e  ao mesmo tempo 
    // 1 - Criar novos elementos na div
    // 2 - Adicionar cada um dos elementos do array a cada um dos elementos da diiv
    const divLista = document.getElementById("lista-nomes");

    //Utilizando o for of para iterar o array
    for (const nome of nomesAlunos) {
        //Elemento p sendo criado
        let p = document.createElement("p");
        //Texto nome sendo inserido no elemento p
        p.textContent = nome;
        //Adicionando o elemento p dentro da div lista
        divLista.appendChild(p);

        console.log(nome);
    }

    //inserir novos nomes no array, utilizando os metodos: push e unshift
    /*push() -> Insere um ou mais itens no ao final do array */
    /*unshift() ->Insere um ou mais itens no início do array */
    nomesAlunos.push("André");
    nomesAlunos.unshift("Hugo")
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:',nomesAlunos );

    //Quebrar linha
    console.log("\n");

    //Removendo o primeiro elemento com shift
    nomesAlunos.shift()
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:',nomesAlunos );