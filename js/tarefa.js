
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    //prevenindo o reload da página.
    evt.preventDefault();

    //Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //Inserindo a tarefa no array e tarefas.
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUl = document.querySelector("#listaTarefa")

    let li = document.createElement("li");

    //li.innerHTML = inputTarefa.value + " <button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " X ";

    li.appendChild(botaoExcluir);

    listaTarefasUl.appendChild(li);


    //Imprimindo o array e tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = "";

});

