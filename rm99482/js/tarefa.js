let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evt)=>{

    //prevenindo o reload da página
    evt.preventDefault();

    //Recuperando o input da tarefa
    const inputTarefa = document.querySelector("#idTarefa");

    //inserindo a tarefa no array
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUl = document.querySelector("#listaTarefa");

    let li = document.createElement("li");

    // li.innerHTML = inputTarefa.value +" <button> x </button>";

    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = " x ";

    li.appendChild(botaoExcluir);

    listaTarefasUl.appendChild(li);

    botaoExcluir.addEventListener("click",(evt)=>{
        evt.preventDefault
        //pegando  o texto da LI dividindo com o split.
        let conteudoDaLi = evt.target.parentNode.textContent.split(" ")
        //descobrindo o indice da tarefa com indexOf
        let indiceTarefa = listaTarefasArray.indexOf(conteudoDaLi[0])        
        listaTarefasArray.splice(indiceTarefa,1)
        console.log(conteudoDaLi)
        console.log(evt.target.parentNode)
        evt.target.parentNode.remove()
    })

    console.log(listaTarefasArray);
    inputTarefa.value = "";

});

//entendendo o método split em js.
// let frase = "Meu profes, de , JS é careca, e ,eu, amo ele,kratos da programação"
// console.log(`Frase:${frase}`)
// let fraseSplitada = frase.split(",")
// console.log(fraseSplitada)