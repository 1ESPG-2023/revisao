const inputTarefa = document.getElementById("inputTarefa")
const form = document.getElementById("formAddTarefa")
// const listaTarefas = document.getElementById("listaTarefas")//div
const ul = document.getElementById("ul")
let tarefas = [] //array
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let tarefa = inputTarefa.value
    tarefas.push(tarefa)
    adicionaTarefaNaLista(tarefas)
    inputTarefa.value = ""
})


function adicionaTarefaNaLista(tarefas){
    ul.innerHTML = ""

    console.log(tarefas)
    tarefas.forEach((item) => {
        let li = document.createElement("li")
        li.textContent = item
        ul.appendChild(li)
        
   });
}
