
let listaTarefasArray = [];
// seletor recupera id
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    //previnindo o reload da pag
    evt.preventDefault();

    //recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //inserindo a tarefa no array e tarefas
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.querySelector("#listaTarefa");

    let li = document.createElement("li");

    // li.innerHTML = inputTarefa.value + " <button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button")

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    //imprimindo o array e tarefas e limpando o campo
    console.log(listaTarefasArray);
    inputTarefa.value = "";

})