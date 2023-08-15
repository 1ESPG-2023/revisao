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

    const listaTarefasUL = document.querySelector("#listaTarefa");

    //Criando o elemento li
    let li = document.createElement("li");

    //li.innerHTML = inputTarefa.value +" <button> x </button>";

    li.textContent = inputTarefa.value;

    //Criando o botão
    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    //Inserindo o botão no li
    li.appendChild(botaoExcluir);

    //Inserindo o botão na ul
    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{

        evt.preventDefault();

        // console.log(botao.paiDoBotao.TextoDoPaiDoBotao);
        //console.log(evt.target.parentNode.textContent);

        //Pegando o texto da li e dividindo com split
        let conteudoDaLi = evt.target.parentNode.textContent.split(" ");
        //console.log(conteudoDaLi);

        //Descobrindo o índice da tarefa com indexOf
        let indiceTarefa = listaTarefasArray.indexOf(conteudoDaLi[0]);
        //console.log(indiceTarefa);

        //Removendo do array com o método splice passando o índice
        listaTarefasArray.splice(indiceTarefa, 1);

        evt.target.parentNode.remove();

        //Imprimindo o array de tarefas e limpando o campo
        console.log(listaTarefasArray);

    });

    //Imprimindo o array de tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = "";
    
});

//Entendendo o método SPLIT de String em JS
// let frase = "Meu prof, de, JS é lindo e, eu, amo ele"
// console.log(`Frase: ${frase}`);

// let fraseSplitada = frase.split(",");
// console.log(fraseSplitada);