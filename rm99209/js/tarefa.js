
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    
    //Prevenindo o reload da página
    evt.preventDefault();

    //Recuperando o input tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //Inerindo a tarefa no array de tarefas
    listaTarefasArray.push(inputTarefa.value);
    
    //Imprimindo o array de tarefas e limpando o corpo
    console.log(inputTarefa.value);

});