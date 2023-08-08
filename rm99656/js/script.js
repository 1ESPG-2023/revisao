

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

nomesAlunos.push("Rodinei") //Insere no final
nomesAlunos.unshift("Flavin") //Insere no início

console.log(`Array: ${nomesAlunos}`)

nomesAlunos.shift() //Remove o primeiro

nomesAlunos.pop() //Remove o últmo

nomesAlunos.sort()

console.log('Array após as modificações:',nomesAlunos );

console.log("\n");

nomesAlunos.reverse();

console.log('Array após as modificações:',nomesAlunos );


let index = nomesAlunos.indexOf("Fernando")

console.log(index)

console.log("\n");

nomesAlunos.splice(3,1,"Claudinho")

console.log(nomesAlunos)

nomesAlunos.splice(3,2,"Cria","Armandinho")

console.log(nomesAlunos)

nomesAlunos.splice(nomesAlunos.indexOf("Cria"), 1)

console.log(nomesAlunos)
