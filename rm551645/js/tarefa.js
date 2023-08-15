let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{

    //Previne o botão de submeter informação para a barra de tarefas
    //Previnindo o reload da página
    evt.preventDefault();

    //Mostra quem está realizando a ação
    //console.log(evento.target);

    //Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");
    //console.log(inputTarefa.value);

    //Inerando a tarefa no array de tarefa
    listaTarefasArray.push(inputTarefa.value);

    //Imprimindo o array de tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = "";
    
});