
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    //revenino o reload da página.
    evt.preventDefault();

    //Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //Inserindo a tarefa no array e tarefas.
    listaTarefasArray.push(inputTarefa.value);

    //Impimino o array e tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = "";

});