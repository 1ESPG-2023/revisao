
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click",(evt)=>{

    // Prevenindo o reload da página
    evt.preventDefault();

    // Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    // Inserindo a tarefa no array de tarefas
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.querySelector("#listaTarefa");

    let li = document.createElement("li");

    // li.innerHTML = inputTarefa.value +" <button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        
        console.log(evt.target.parentNode);

        evt.target.parentNode.remove();

        console.    log(listaTarefasArray);

    });

    // Imprimindo o array de tarefas e limpando o campo
    console.log(listaTarefasArray);
    inputTarefa.value = "";

});

// Entendendo o método SPLIT em String em JS.
// let frase = "Meu prof, de, JS é lindo e, eu , amo ele.";
// console.log(`Frase: ${frase}`);

// let fraseSplitada = frase.split(",");
// console.log(fraseSplitada);