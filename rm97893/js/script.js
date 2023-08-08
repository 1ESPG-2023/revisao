// Declaração de um Array de nome de alunos
let nomesAlunos = ['Ao Mosso','Jão tar','Ah Ross','Lin Gui-sa','Fei John']

// Impressão da primeira posição do array:
console.log(nomesAlunos[0]);

// Quebrar linha para melhor visualização no console;
console.log("\n");

// Imprimindo todos os elementos do Array com for
for (let i= 0;i<nomesAlunos.length ;++i){

    // Imprime o valor atual do elemento na variável "elemento"
    let elemento = nomesAlunos[i];

    // Imprimindo o elemento atual do array:
    // console.log("elemento "+i+ ": ",elemento);

    // Imprimindo o elemento atual do array com template string
    console.log(`Elemento ${i}: `,elemento);
}
    //Quebrar linha
    console.log("\n")

    //Utilizar um forEach para imprimir o array:
    nomesAlunos.forEach( nome=>{
        console.log(`Nome do aluno: ${nome}`);
    });

    //Quebrar linha
    console.log("\n")

    // Gerar um novo loop para iterar o array e ao mesmo tempo
    // 1 - Criar novos elementos na div
    // 2 - Adicionar cada um dos elementos do array a cada um dos elementos da div
    
    const divLista = document.getElementById("lista-nomes")

    // Utilizando o for of para iterar o array
    for (const nome of nomesAlunos) {
        // Elemento "p" sendo criado
        let p = document.createElement("p");

        // Teto nome sendo inserido no elemento p
        p.textContent = nome;

        // Adicionando o elemento p dentro da div lista
        divLista.appendChild(p);

        console.log(nome);

    }

    // Inserir novos nomes no array, utilizando os metodos: push e unshift
    /* push() -> Insere um ou mais itens no final do array */
    /* unshift() -> Insere um ou mais itens no ínicio do array */
    nomesAlunos.push("Kos-te-lah");
    nomesAlunos.unshift("Rois Bif");

    // Imprimindo o Array depois das alterações realizadas nos métodos acima:
    console.log('Array após as modificações:',nomesAlunos );

    // Removendo o primeiro elemento com shift
    nomesAlunos.shift();