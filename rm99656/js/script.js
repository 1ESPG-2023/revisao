

let nomesAlunos = ["João", "Fernando", "Rodgrigo", "Matheus", "Eric"]

// console.log(nomesAlunos[0]);

// nomesAlunos.forEach(element => {
//     console.log[i]
// });

for (var i = 0; i< nomesAlunos.length; i++){

    let elemento = nomesAlunos[i];

    console.log(`Elemento ${i}: `,elemento);
}


console.log("\n")

// nomesAlunos.forEach(nome =>{
//     console.log(`Nome do cria: ${nome}`)
// })

nomesAlunos.forEach( (nome,index) =>{
    console.log(`Nome do cria : ${index + 1} - ${nome}`);     
});

const divnomes = document.getElementById("lista-nomes")

for (const nome of nomesAlunos) {
    let p = document.createElement("p");

    p.textContent = nome

    divnomes.appendChild(p)
    
    console.log(nome)
}


