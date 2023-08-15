let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa")

botaoAddTarefa.addEventListener("click", (evento)=>{
    // previnindo o reload da página
    evento.preventDefault

    // recuperar input da tarefa
    const inputTarefa = document.querySelector("#idTarefa")

    // inserindo a tarefa no array 
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUl = document.querySelector("#lista-tarefa");
    //jeito preguiçoso. É de preguiçoso pq vou tr que recuperar ele e fazer a marcação dele
    // let li = document.createElement("li")
    // li.innerHTML = inputTarefa.value+ " <button>X</button>"
    // listaTarefasUl.appendChild(li);

    // jeito "certo"
    let li = document.createElement("li")
    li.textContent = inputTarefa.value;

    let botaoExcluir = document.createElement("button")

    botaoExcluir.textContent = " X "

    li.appendChild(botaoExcluir); 

    listaTarefasUl.appendChild(li);

    // imprimindo o array e limpando campo
    console.log(listaTarefasArray)
    inputTarefa.value=""
})