
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

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUL.appendChild(li);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();

        // console.log(botao.paidoBotao.textodoPaidoBotao);
        // console.log(evt.target.parentNode.textContent);

        //pegando o texto da li dividindo com o split
        let conteudoDaLi = evt.target.parentNode.textContent.split(" ");
        // console.log(conteudoDaLi)
        //descobrindo o indice da tarefa com indexOf
        let indiceTarefa = listaTarefasArray.indexOf(conteudoDaLi[0]);
        // console.log(indiceTarefa);
        
        //removendo o array com metodo splice passando o indice
        listaTarefasArray.splice(indiceTarefa, 1);

        evt.target.parentNode.remove();
        //imprimindo o array de tarefas e limpando o campo
        console.log(listaTarefasArray);
    });

    //imprimindo o array e tarefas e limpando o campo
    console.log(listaTarefasArray);
    inputTarefa.value = "";

});


//entendendo o método SPLIT de string em JS
let frase = "Meu prof, de, JS é lindo e, eu, amo ele.";
console.log(`Frase: ${frase}`);

let fraseSplitada = frase.split(",");
console.log(fraseSplitada);