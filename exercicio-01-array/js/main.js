const inputTarefa = document.getElementById("inputTarefa")
const btnAdiciona = document.getElementById("btnAdiciona")
const form = document.getElementById("formAddTarefa")
const listaTarefas = document.getElementById("listaTarefas")//div
let tarefas = [] //array
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let tarefa = inputTarefa.value
    tarefas.push(tarefa)
    //console.log(tarefas)
    adicionaTarefaNaLista(tarefas)
})


function adicionaTarefaNaLista(tarefas){
    listaTarefas.innerHTML = ""

    console.log(tarefas)
    tarefas.forEach((item) => {
        let p = document.createElement("p")
        p.textContent = item
        p.classList.add("task")
        let btnDeleta = document.createElement("button")
        btnDeleta.textContent = "X"
        btnDeleta.addEventListener("click", ()=>{
            deletaTarefa(item)
        });
        p.appendChild(btnDeleta)
        
        listaTarefas.appendChild(p)
   });
}

function deletaTarefa(item){
    tarefas.splice(item, 1);
    adicionaTarefaNaLista()
}

