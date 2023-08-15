let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa")

botaoAddTarefa.addEventListener("click", (evento)=>{
    // previnindo o reload da página
    evento.preventDefault

    // recuperar input da tarefa
    const inputTarefa = document.querySelector("#idTarefa")

    // inserindo a tarefa no array 
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUl = document.querySelector("#lista-tarefa");
    //jeito preguiçoso. É de preguiçoso pq vou tr que recuperar ele e fazer a marcação dele
    // let li = document.createElement("li")
    // li.innerHTML = inputTarefa.value+ " <button>X</button>"
    // listaTarefasUl.appendChild(li);

    // jeito "certo"
    let li = document.createElement("li")
    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button")

    botaoExcluir.textContent = " X "

    li.appendChild(botaoExcluir); 

    listaTarefasUl.appendChild(li);
    // divisao

    botaoExcluir.addEventListener("click", (evento)=>{
        evento.preventDefault();
        // usando parentNode pois o Li que precisa ser exluido é pai do botao clicado
        // console lo (botao.paidobotao.Textopaidobotao)
        // console.log(evento.target.parentNode.textContent);

        // Pegando o texto da li dividindo com split
        // é o tolken (",")
        let conteudoDaLi = evento.target.parentNode.textContent.split(" ");
        // console.log(conteudoDaLi);

        //Descobrindo o índice da tarefa com indexOf
        let indiceTarefa = listaTarefasArray.indexOf(conteudoDaLi[0]);
        // console.log(indiceTarefa)
        
        // Remeovendo do array com o método splice passando o indice.
        listaTarefasArray.splice(indiceTarefa, 1);


        evento.target.parentNode.remove();

        // imprimindo o array e limpando campo
        console.log(listaTarefasArray);

    })

    // imprimindo o array e limpando campo
    console.log(listaTarefasArray)
    inputTarefa.value=""
})

// Entendendo o split
let frase = "Meu prof, de, js é lindo e, eu, amo ele."
console.log(`Frase ${frase}`)

let fraseSplitada = frase.split(",");
console.log(fraseSplitada)