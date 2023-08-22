//Declaração de um array com nomes de alunos
let nomeAlunos = ['Vinicius', "Pedro", "Ricardo", "Guilherme"];

//Impressão primeira posição do array
console.log(nomeAlunos[0]);

//Quebra da linha no console
console.log('\n');

//Imprimindo todos os elementos do array com for
for(let i = 0; i < nomeAlunos.length; i++){
    //Imprimindo os nomes dos alunos com template String
    console.log(`Nome(for): ${nomeAlunos[i]}`);
}
console.log("\n");

//Imprimindo os nomes usando o forEach
nomeAlunos.forEach((aluno)=>{
    console.log(`Nome(forEach): ${aluno}`);
});

//Gerar um novo loop para iterar o array e ao mesmo tempo
//1 - Criar novos elementos na div
//2 - Adicionar cada um dos elementos do array a cada um dos elementos da div
console.log("\n");

const listaNomes = document.getElementById("listaNomes");

//Utilizando o for of para imprimir o Array
for(const nome of nomeAlunos){
    //Elemento p sendo criado
    const p = document.createElement("p");
    //Mudando o texto do elemento p
    p.textContent = `Nome(for of): ${nome}`;
    //Adicionando o p na div(listaNomes)
    listaNomes.appendChild(p);
}

//Inserir usando os metodos push ou unshift
//push() -> insere um ou mais itens no final do array
//unshift() -> insere um ou mais itens no inicio do array
nomeAlunos.push("André");
nomeAlunos.push("Valentina");
//Imprimindo o array depois de dar um push()
console.log(`Array após as alterações:`,nomeAlunos);

//removendo o primeiro elemento com shift
nomeAlunos.shift();
console.log("\n");
console.log("Array após as alterações:",nomeAlunos);

//removendo itens com o método pop()
nomeAlunos.pop();
console.log("\n");
console.log("Array após as alterações:",nomeAlunos);

//colocando os dados em ordem alfabética
nomeAlunos.sort();
console.log("\n");
console.log("Array após as alterações:",nomeAlunos);

//revertendo a posição dos dados com o método reverse
nomeAlunos.reverse();
console.log("\n");
console.log("Array após as alterações:",nomeAlunos);

//Buscando elementos com indexOf
let index = nomeAlunos.indexOf("Guilherme")
console.log("\n")
console.log("Array após as alterações:",nomeAlunos)
console.log("Posição que o elemento buscado foi encontrado:", index)

//Alterando um elemento no array com o método splice()
//splice(indice, vezes, conteudo)
nomeAlunos.splice(3, 1, "Jojo")
console.log("\n")
console.log("Array após as alterações:",nomeAlunos)

//Alterando um elemento no array com o método splice()
//splice(indice, vezes, conteudo)
nomeAlunos.splice(1, 1, "tuca")
console.log("\n")
console.log("Array após as alterações:",nomeAlunos)

//Removendo um elemento no array com o método splice utilizando o método indexOf como parâmentro

let indexNome = nomeAlunos.indexOf("Tuca")
nomeAlunos.splice(indexNome, 1)
console.log("Array após as alterações:",nomeAlunos)
