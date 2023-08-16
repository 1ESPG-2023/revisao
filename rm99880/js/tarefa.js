let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{

    //Prevenindo o reload da página.
    evt.preventDefault();

    //Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //Inerindo a tarefa no array de tarefas.
    listaTarefasArray.push(inputTarefa.value);
    
    const listaTarefasUL = document.querySelector("#listaTarefa");
    let li = document.createElement("li");

    li.textContent = inputTarefa.value;
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " X "
    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        evt.target.parentNode.remove();

        //Pegando o texto da li e dividindo com Split
        let conteudoDaLi = evt.target.parentNode.textContent.split(" ")
        console.log(conteudoDaLi)

        //Descobrindo o indice da tarefa com indexOf
        let indiceTarefa = listaTarefasArray.indexOf(conteudoDaLi[0]);
        
        //Removendo do array com o método splice passando o indice.
        listaTarefasArray.splice(indiceTarefa, 1)
        console.log(listaTarefasArray);
    });

    //Imprimindo o array de tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = "";
});

// Entendendo o método SPLIT de String em JS.
// let frase = "Meu prof, de, JS é lindo e, eu, amo ele.";
// console.log(`Frase:${frase}`);

// let fraseSplitada = frase.split(",");
// console.log(fraseSplitada);