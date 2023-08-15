let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click",(evento)=>{
   
    evento.preventDefault();


    const inputTarefa = document.querySelector("#idTarefa");
    console.log(inputTarefa.value)
    console.log(listaTarefasArray)
    inputTarefa.value="";
    
})