
//declarando variaveis com omes de aluno

let nomesAlunos = ["Persia","Jose","Aline","Carlos","Julia","Marcelo","Claudia"]


// impressao da primeira posição do array

console.log(nomesAlunos[0],"\n");

//todos os elementos do array com for:

for (let i= 0;i<nomesAlunos.length;++i){
    let elemento = nomesAlunos[i]
    //imprimindo o elementro atual (i) do array
    console.log("Elemento"+i+": ",elemento)
    //imprimindo elemento com template string
    console.log(`Elemento${i}: `,elemento)
    console.log("\n")
    console.log("\n")
}

nomesAlunos.forEach((nome,index)=>{
    console.log(`Nome do aluno : ${index + 1}- ${nome}`)
})
const divLista = document.getElementById("Lista-nomes")
//Gerar um novv loop para   iterar array e ao mesmo tempo
// 1  - criar novos elementos na div
//2  - adicionar cada um dos elementos do arrya a cada um dos elementos da div
for (const nome of nomesAlunos){
    let p = document.createElement("p")
    p.textContent = nome
    divLista.appendChild(p);
    console.log("\n")

    console.log(nome);
    console.log("\n")
}

//Inserir novos nomes no array utilizando os metodos push e unshift
//push() -> Insere um ou mais itens no ao final do array
// unshift() no inicio

nomesAlunos.push("André")
nomesAlunos.unshift("Hugo")
console.log("\n")
nomesAlunos.shift()
console.log("Array apos modificações",nomesAlunos)
console.log("\n")
//Removendo primeiro element com shift
//Quebrar linha
console.log("\n");
//Removendo o último elemento com pop
nomesAlunos.pop();
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log('Array após as modificações:',nomesAlunos );

//Quebrar linha
console.log("\n");
//Colocando os dados em ordem alfabetica com o método sort.
nomesAlunos.sort();
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log('Array após as modificações:',nomesAlunos );

//Quebrar linha
console.log("\n");
//revertendo a poição dos dados com o método reverse.
nomesAlunos.reverse();
//Imprimindo o array depois das alterações realizadas nos métodos acima:
console.log('Array após as modificações:',nomesAlunos );

let index = nomesAlunos.indexOf("Claudia");
//imprimindo o array depois das alterações realizadas nos metodos acima

//alterando com o metodo splice
nomesAlunos.splice(3,1,"Jojo")
console.log("Array apos modificações,nomesAlunos",nomesAlunos);
console.log("Posição onde foi encontrado",index)

nomesAlunos.splice(3,2,"Tuca");
console.log("Array apos modificacoes",nomesAlunos)

