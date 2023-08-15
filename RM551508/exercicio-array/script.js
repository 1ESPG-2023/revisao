let listaTarefasArray = []

const botaoAddTarefa = document.querySelector("#btnAddtarefa")


botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault()
    const InputTarefa = document.querySelector("#IdTarefa")
    listaTarefasArray.push(InputTarefa.value)
    
    
    const listaTarefaUl = document.querySelector("#listaTarefa")
    let li = document.createElement("li")
    
    li.textContent = InputTarefa.value

    let botaoExcluir = document.createElement("button")
    botaoExcluir.textContent =  " x "

    li.appendChild(botaoExcluir)
    listaTarefaUl.appendChild(li)



    console.log(listaTarefasArray)
    InputTarefa.value =  ''
})
