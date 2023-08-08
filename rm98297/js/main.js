//declaração de um array de nomes de alunos

let nomes_alunos = ['Persia','josé','Aline','carlos','julia','Marcelo','Claudia']

//impressão da primeira posição do array

console.log(nomes_alunos[0])


for (let i = 0; i < nomes_alunos.length; i++) {

    let elemento = nomes_alunos[i]
    console.log(`Elemento` + i + ": " ,elemento)

    console.log('\n')
    
}

// each para imprimr array

nomes_alunos.forEach((nome,i) =>{

    console.log(` Nome do aluno ${i} ${nome}`)


})



//Gerar um novo loop para iterar o array e ao mesmo tempo

//1 - Criar novos elementos na div
//2 Adicona cada um dos elementos a cada um dos elementos da div


//Ultiizando o for of para iterar o array

for (const nome of nomes_alunos) {

    let p = document.createElement('p')

    p.innerHTML = nome

    const div_lista = document.getElementById('Lista_nomes')
    
    div_lista.appendChild(p)

    
}


//nserir novos nomes do array, ultilizando os métodos push e unshift
/* push() -> insere um  ou mais itens no final do array*/
/* unshift() -> insere um ou mais itns no inicio do array*/

nomes_alunos.push('André')
nomes_alunos.unshift('Hugo')

console.log(nomes_alunos)



//Removendo o primeiro elemento com shift

nomes_alunos.shift();




//Removendo o útimo elemento
nomes_alunos.pop();

console.log(nomes_alunos)


//imprimindo elemento do array em ordem alfabética

nomes_alunos.sort()


//buscando elementos com index of

let index = nomes_alunos.indexOf('Claudia')


//Alterando um elemento no array usando método splice()
nomes_alunos.splice(3, 1 , 'Lucas')


nomes_alunos.splice(3, 2 , 'Tuca')


//Alterando um elemento no array usando método splice() ultilizando indexof

let indexnome = nomes_alunos.indexOf('Tuca')

nomes_alunos.splice(indexnome, i)



console.log(' Array após as modificações', nomes_alunos)
console.log(' A Posição onde oe lemento foi encontrado :', index)









