//Recuperando os campos de input do DOM
const formsAdicionaTarefas = document.getElementById("formAddTarefas");
const inputDescricao = document.getElementById("inputDescricao");
const inputAutor = document.getElementById("inputAutor");
const inputDepartamento = document.getElementById("inputDepartamento");
const inputImportancia = document.getElementById("inputImportancia");
const trThead = document.getElementById("trThead");
const tbody = document.getElementById("tbody");

const arrayTarefas = []

//Escutador de evento no forms escutando o evento "submit"
formsAdicionaTarefas.addEventListener("submit",(e)=>{
    e.preventDefault()
    //Definindo objeto da tarefa com as respectivas propriedades
    const tarefa = {
        descricao: inputDescricao.value,
        autor: inputAutor.value,
        departamento: inputDepartamento.value, 
        importancia: inputImportancia.value,
        valor: null
    };
    //Adiciona os objetos da tarefa no array
    arrayTarefas.push(tarefa);

    //Chamando a função de adicionar item na tabela
    adicionaTarefaNaTabela(arrayTarefas);
});

//cria o th das opções
let thOpcoes = criaElemento("th")

//cria th do valor
let thValor = criaElemento("th")

//função para criar elemento no DOM
function criaElemento(elemento){
    let element = document.createElement(elemento);
    return element;
}

/*função adiciona elementos na tabela, pega o elemento criado e 
muda o texto para devido conteudo e 
adiciona na tabela*/
function adicionaElementoNatabela(elemento, conteudo, tr){
    elemento.textContent = conteudo; 
    tr.appendChild(elemento)
}

function adicionaTarefaNaTabela(arrayTarefas){
    tbody.innerHTML = ""
    arrayTarefas.forEach((item)=>{
        // console.log(item)
        //criando elementos da tabela
        let tr = criaElemento("tr")
        let tdDescricao = criaElemento("td");
        let tdAutor = criaElemento("td");
        let tdDepartamento = criaElemento("td");
        let tdImportancia = criaElemento("td");
        let tdValor = criaElemento("td");
        let btnAddValor = criaElemento("button");
        let btnDuracao = criaElemento("button");
        let btnConcluir = criaElemento("button");
        
        
        //Adicionando elementos na tabela
        adicionaElementoNatabela(tdDescricao, item.descricao, tr);
        adicionaElementoNatabela(tdAutor, item.autor, tr);
        adicionaElementoNatabela(tdDepartamento, item.departamento, tr);
        adicionaElementoNatabela(tdImportancia, item.importancia, tr);
        adicionaElementoNatabela(btnAddValor, "Adicionar Valor", tr)
        adicionaElementoNatabela(btnDuracao, "Adicionar duração", tr)
        adicionaElementoNatabela(btnConcluir, "Concluir", tr)
        adicionaElementoNatabela(thOpcoes, "Opções", trThead)
        adicionaElementoNatabela(thValor, "valor", trThead)
        
        
        //Botão concluir quando clicado ele remove uma tr da tabela
        btnConcluir.addEventListener("click", ()=>{
           tr.remove()
           deletaItem(item)
        });
        
        btnAddValor.addEventListener("click", ()=>{
        })

        //adicionando a tr no tbody da tabela
        tbody.appendChild(tr)
        
    }) 
}

function deletaItem(item){
    const indexTarefa = arrayTarefas.indexOf(item)
    if (indexTarefa !== -1){
        arrayTarefas.splice(indexTarefa, 1)
        adicionaTarefaNaTabela(arrayTarefas)
        if(arrayTarefas.length <= 0){
            thOpcoes.remove()
        }
    }
}

function adicionaValor(item){
    const valor = parseFloat(prompt("Digite um valor: "));
    if (!isNaN(valor)){
        item.valor = valor
        // adicionaTarefaNaTabela(arrayTarefas)
    }
}


