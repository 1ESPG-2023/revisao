

//Declaração de um array de nomes de alunos:
let nomesAlunos = ["Persia","José","Aline","Carlos","Júlia","Marcelo","Claudia"];

//Impressão da primeira posição do array:
console.log(nomesAlunos[0]);
//Quebrar linha para melhor visualização no console:
console.log("\n");

//Imprimindo todos os elementos do array com for:
for (let i= 0;i<nomesAlunos.length ;++i){
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
    nomesAlunos.forEach( (nome,index) =>{
        console.log(`Nome do aluno : ${index + 1} - ${nome}`);     
    });

    //Quebrar linha
    console.log("\n");

    //Gerar um novo loop para iterar o array e ao mesm tempo 
    //1 - Criar novos elementos na div
    //2 - Adicionar cada um dos elementos do array a cada um dos elementos da div

    const divLista = document.getElementById("lista-nomes")

    //utilizando o for of para iterar o array 
    for (const nome of nomesAlunos) {
        //elemento p sendo criando
        let p = document.createElement("p")
        //
        p.textContent = nome;

        divLista.appendChild(p);
        
        console.log(nome);
    }

        //Quebrar linha
        console.log("\n");

    //inserir novos nomes no array, utilizando metodos: push e unshift
    /*push()-> insere um ou mais itens no ao */ 

    nomesAlunos.push("André")
    nomesAlunos.unshift("Hugo")

    console.log('array após as modificações:',nomesAlunos);
    
    
    
