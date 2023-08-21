// Criando array e depositando em uma const
let listaTarefasArray = [];

// Chamando o botão do html
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{

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

    let botaoExcluir = document.criateElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{
        
        evt.preventDefault();

        // console.log(botao.paiDoBotao.TextoDoPaiDoBotao);
        // console.log(evt.target.parentNode.textContent);

        // Pegando o texto da li dividinfo com split
        let conteudoDali = evt.target.parentNode.textContent.split(" ");
        //  console.log(conteudoDaLi);

        // Descobrindo o indice da tarefa indexOf
        let indiceTarefa = listaTarefasArray.indexOf(conteudoDali[0]);

        // Removendo do array com o método splice passando o indice
        listaTarefasArray.splice(indiceTarefa, 1);
        
        evt.target.parentNode.remove();
        // imprimindo o array de tarefas e limpando o campo
        console.log(listaTarefasArray);
    });

    // Imprimindo o array de taregas e limpando o campo
    console.log(listaTarefasArray);
    inputTarefa.value = "";
});

