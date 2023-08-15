
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

    //Adicionando a função para o botao excluir
    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();

        //Pegando o texto da li e dividindo com split
        let conteudoDaLi = evt.target.parentNode.textContent.split(" ");
        // console.log(conteudoDaLi);
        
        //Descobrindo o indice da tarefa com indexof
        let indiceTarefa = listaTarefasArray.indexOf( conteudoDaLi[0]);
        // console.log(indiceTarefa);

        //Removendo do array com o metodo splice passando o indice
        listaTarefasArray.splice(indiceTarefa, 1);
        

        evt.target.parentNode.remove();

        //Imprimir o array de tarefas e limpando o campo    
        console.log(listaTarefasArray);
    })


    //Imprimindo o array de tarefas e limpando o campo.
    console.log(listaTarefasArray);
    inputTarefa.value = ""; //Serve pra limpar o campo

});

//Entendendo o método SPLIT de String em JS.
// let frase = "Meu prof, de, JS é lindo e, eu , amo ele.";
// console.log(`Frase: ${frase}`);

// let fraseSplitada = frase.split(",");
// console.log(fraseSplitada);