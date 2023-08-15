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

    //Imprimindo o array de tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = "";
});