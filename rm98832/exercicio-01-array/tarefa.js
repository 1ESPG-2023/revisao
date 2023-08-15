
let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnTarefa");

botaoAddTarefa.addEventListener('click', (evento)=>{

    evento.preventDefault();

    const inputTarefa = document.querySelector('#idTarefa');
    listaTarefasArray.push(inputTarefa.value);
    inputTarefa.value = "";
} )