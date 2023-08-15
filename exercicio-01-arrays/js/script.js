const listatarefas = [];
const ulTarefas = document.getElementById("lista-tarefas");

const botao = document.getElementById("botao");

botao.addEventListener('click', (evento) => {
    const mensagem = document.getElementById("mensagem")
    const input = document.getElementById("c-input");
    evento.preventDefault();

    if(input.value !="" && input.value != null) {
        mensagem.innerHTML = ""
        listatarefas.push(input.value);
        //passar ou não o parãmetro??
        atualizarLista(listatarefas);
        input.value = ""
    } else {
        mensagem.innerHTML = "Escreva uma tarefa"
    }
});


function atualizarLista(listatarefas) {
    ulTarefas.innerHTML = "";

    listatarefas.forEach((tarefa, index) => {
        let novoItem = document.createElement("li");
        novoItem.textContent = tarefa;
        
        novoItem.addEventListener('click', () => {
            listatarefas.splice(index, 1); 
            //atualizar o array
            atualizarLista(listatarefas); 
        });

        ulTarefas.appendChild(novoItem);
    });
    console.log(listatarefas)
}





