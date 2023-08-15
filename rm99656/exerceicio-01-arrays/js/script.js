let listaTarefas = [];

const botaoEnviar = document.querySelector('#botaoEnviar');

botaoEnviar.addEventListener('click',(e)=>{
    
    e.preventDefault();
    console.log(e.target);

    const inputTarefa = document.querySelector("#idTarefa");
    console.log(inputTarefa.value);

    listaTarefas.push(inputTarefa.value);

    console.log(listaTarefas);
    inputTarefa.value = "";

    }
);