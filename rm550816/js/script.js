
//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia", "José", "Aline", "Carlos", "Júlia", "Marcela", "Claudia"]

//Ipressão da primeira posição do Array:
console.log(nomesAlunos[0]);

//Quebrar linha para melhor visualização no console:
console.log("\n") 

//Imprimindo todos os elementos do array com for:
for (var i= 0; i<nomesAlunos.length; ++i){
    //Imprime o valor atual do elemento na variável "elemento":
    let elemento = nomesAlunos[i];
    //Imprimindo o elemento atual do array:
    console.log("Elemento "+i+ ": ",elemento);
    //Imprimindo o elemento atual do array com template String:
    console.log(`Elemento ${i}: `,elemento);
    //Quebrar linha
    console.log("\n");
}

    //Quebrar linha
    console.log("\n");

    //Utilizar um forEach para imprimir o Array:
    nomesAlunos.forEach((nome, index)=>{
        console.log(`Nome do aluno : ${index + 1} ${nome}`)
    });
    
    //Quebrar linha
    console.log("\n");

    // Gerar um novo loop para iterar o array e ao mesmo tempo 
    // 1 - Criar novos elementos
    // 2 - Adicionar cada um dos elementos do array a cada um dos elementos da div

    const divLista = document.getElementById("lista-nomes");

    //utilizando for off para iterar o array
    for (const nome of nomesAlunos) {
        //elemento p sendo criado
        let p = document.createElement("p");
        //texto nome sendo inserido no elemento p 
        p.textContent = nome;
        divLista.appendChild(p);

        console.log(nome)
    }

    //Inserir novos nomes no array, utilizando metodos os metodos: push e unshift
    /*push() -> Insere um ou mais itens no ao final array */
    /*unshift() -> Insere um ou mais itens no início do array */
    nomesAlunos.push("Ádre")
    nomesAlunos.unshift("Hugo")
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:',nomesAlunos );

    //Quebrar linha
    console.log("\n");

    //Removendo o primeiro elemento com shift
    nomesAlunos.shift();
    //Imprimindo o array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:',nomesAlunos );
    



