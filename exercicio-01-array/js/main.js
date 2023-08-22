const inputTarefa = document.getElementById("inputTarefa");
const form = document.getElementById("formAddTarefa");
const listaTarefas = document.getElementById("listaTarefas")
const ul = document.getElementById("ul");
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
    tarefas.forEach((item) => {
        let li = document.createElement("li")
        li.textContent = item
        li.classList.add("task")
        let button = document.createElement("button")
        button.textContent = "X"
        button.addEventListener("click", ()=>{
            deletaItem(item)
        })
        li.appendChild(button)        
        ul.appendChild(li)
        
   });
   listaTarefas.appendChild(ul)
}

function deletaItem(item){
    const indexLista = tarefas.indexOf(item)
    if (indexLista !== -1){
        tarefas.splice(indexLista, 1)
        adicionaTarefaNaLista(tarefas)
    }
}
