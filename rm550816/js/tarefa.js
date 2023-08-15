
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{
    // evt = evento
    //Prevenindo o reload da pg.
    evt.preventDefault();
    
    //Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa")
    
    //Inerindo a tarefa no array de tarefas.
    // .value ele pega o valor do objeto: aparecendo a palavra corretamente no console
    listaTarefasArray.push(inputTarefa.value); 

    const listaTarefasUL = document.querySelector("#listaTarefa");

    let li = document.createElement("li")
    
    // li.innerHTML = inputTarefa.value + " " + "<button> x </button>"; JEITO MAL FEITO

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li); 

    //Imprimindo o array de tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = ""; //Serve pra limpar o campo


});