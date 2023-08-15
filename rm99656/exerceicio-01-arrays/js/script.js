let listaTarefas = [];

const botaozinEnviar = document.querySelector('#botaoEnviar');

botaozinEnviar.addEventListener('click',(e)=>{
    
    e.preventDefault();
    console.log(e.target);

    const inputTarefa = document.querySelector("#idTarefa");
    console.log(inputTarefa.value);

    listaTarefas.push(inputTarefa.value);

    const listaTarefasUL = document.querySelector("#listaTarefa");

    let li = document.createElement("li");
    li.textContent = inputTarefa.value

    let botaozinExcluir = document.createElement("button");

    botaozinExcluir.textContent = (" X ")

    li.appendChild(botaozinExcluir)

    listaTarefasUL.appendChild(li);

    botaozinExcluir.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(e.target.parentNode);

        }
    );


    // li.innerHTML = inputTarefa.value +" <button> X </button>";



    console.log(listaTarefas);
    inputTarefa.value = "";

    }
);