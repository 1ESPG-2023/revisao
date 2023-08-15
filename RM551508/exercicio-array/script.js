let listaTarefasArray = []

const botaoAddTarefa = document.querySelector("#btnAddtarefa")


botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault()
    const InputTarefa = document.querySelector("#IdTarefa")
    listaTarefasArray.push(InputTarefa.value)
    console.log(listaTarefasArray)
    InputTarefa.value =  ''

})

