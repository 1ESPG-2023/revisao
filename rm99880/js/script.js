//Declaração de um arrya de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Júlia", "Marcelo", "Cláudia"];

    //Impressao de primeira posição do array:
    console.log(nomesAlunos[0]);

//Quebrar linha para melhor vizualização no console:
console.log("\n");

    //Imprimindo todos os elementos do array com for:
    for (let i= 0; i<nomesAlunos.length; ++i){
        //Imprime o valor atual do elemento na variável "elemento":
        let elemento = nomesAlunos[i];
        //Imprimindo o elemento atual do array:
        console.log("Elemento "+i+ ": ", elemento);
        //Imprimindo o elemento atual do array com Template String:
        console.log(`Elemento${i}:`,elemento);
    };

//Quebrar linha
console.log("\n");

    //Utilizar um forEach  para imprimir o Array:
    nomesAlunos.forEach( nome =>{
        console.log(`Nome do Aluno: ${nome}`)
    } );
    
//Quebrar linha    
console.log("\n");

    //Utilizar um forEach  para imprimir o Array:
    nomesAlunos.forEach(( nome, index) =>{
        console.log(`Nome do Aluno: ${index + 1} - ${nome}`)
    } );

//Quebrar linha    
console.log("\n");

    //gerar um novo loop paa iterar o array e ao mesmo tempo
    // 1 - Criar novos elementos na div
    // 2 - Adicionar cada um dos elememtos do array a cada um dos elementos da div

    const divLista = document.getElementById("lista-nomes");

    //Utilizando o for of para iterar o array
    for (const nome of nomesAlunos){
        //Elemento p sendo criado
        let p = document.createElement("p");
        //Texto nome sendo inserido no elemento p
        p.textContent = nome;
        //Adicionando o elemento p dentro da div lista
        divLista.appendChild(p);
        console.log(nome)
    };

//Quebrar linha
console.log("\n");

    //Inserir novos nomes no array, utilizando os metodos: push e unshift
    /*push() -> Insere um ou mais itens no ao final array */
    /*unshift() -> Insere um ou mais itens no início do array */

    nomesAlunos.push("André");

//Quebrar linha
console.log("\n");

    nomesAlunos.unshift("Hugo");
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:',nomesAlunos );
    
    //Removendo o primeiro elemento com shift
    nomesAlunos.shift();
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:', nomesAlunos);

//Quebrar linha
console.log("\n");

    //Removendo o último elemento com pop
    nomesAlunos.pop();
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:', nomesAlunos);

//Quebrar linha
console.log("\n");

    //Colocando os elementos em ordem alfabética com o sort
    nomesAlunos.sort();
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:', nomesAlunos);

//Quebrar linha
console.log("\n");

    //Revertendo a posição dos dados com o reverse.
    nomesAlunos.reverse();
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:', nomesAlunos);

//Quebrar linha
console.log("\n");

    //Buscando elementos com indexOf
    let index = nomesAlunos.indexOf("Cláudia");  //Se o elemento não for encontrado será exibido -1
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:', nomesAlunos);
    console.log('Posição onde o elemento foi encontrado:', index);

//Quebrar linha
console.log("\n");

    //Alterando um elemento com splice:
    nomesAlunos.splice(3,1,"Jojo");  //Se o elemento não for encontrado será exibido -1
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:', nomesAlunos);
    console.log('Posição onde o elemento foi encontrado:', index);

//Quebrar linha
console.log("\n");

    //Alterando um elemento no array com o método splice e solicitando mais uma alteração.
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    nomesAlunos.splice(3,2,"Tuca");
    console.log('Array após as modificações:',nomesAlunos );

//Quebrar linha
console.log("\n");

    //Remover um elemento no array com o método splice utilizando o método indexOf como parâmetro
    ////Imprimindo o array depois das alterações realizadas nos métodos acima:
    let indexNome = nomesAlunos.indexOf("Tuca");
    nomesAlunos.splice(indexNome,1);
    console.log('Array após as modificações:', nomesAlunos)