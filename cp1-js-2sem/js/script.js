//Recuperando os campos de input do DOM
const formsAdicionaTarefas = document.getElementById("formAddTarefas");
const inputDescricao = document.getElementById("inputDescricao");
const inputAutor = document.getElementById("inputAutor");
const inputDepartamento = document.getElementById("inputDepartamento");
const inputImportancia = document.getElementById("inputImportancia");
const trThead = document.getElementById("trThead");
const tbody = document.getElementById("tbody");
const btnOrdenaPorImportancia = document.getElementById("btnOrdenaPorImportancia")
let arrayTarefas = [];
let importanciaNumero = 0;
//Escutador de evento no forms escutando o evento "submit"
formsAdicionaTarefas.addEventListener("submit", function(e){
    e.preventDefault();
    
    //Definindo objeto da tarefa com as respectivas propriedades
    tarefa = {
        descricao: inputDescricao.value,
        autor: inputAutor.value,
        departamento: inputDepartamento.value,
        importancia: inputImportancia.value
    };

    //Adiciona os objetos da tarefa no array
    arrayTarefas.push(tarefa);
    //Chamando a função de adicionar item na tabela
    adicionaTarefaNaTabela(arrayTarefas);
});
btnOrdenaPorImportancia.addEventListener("click", ()=>{
    arrayTarefas.sort((a, b) => importanciaParaNumero(b.importancia) - importanciaParaNumero(a.importancia));
    adicionaTarefaNaTabela(arrayTarefas);
})
function importanciaParaNumero(importancia){
    if (importancia === "baixa") {
        return 0;
    } else if (importancia === "media") {
        return 1;
    } else if (importancia === "alta") {
        return 2;
    }
}
//cria o th das opções
let thOpcoes = criaElemento("th");
//cria th do valor
let thValor = criaElemento("th");
//cria th duração
let thDuracao = criaElemento("th");





function adicionaTarefaNaTabela(arrayTarefas) {
    tbody.innerHTML = ""

    arrayTarefas.forEach((item) => {
        //criando elementos da tabela
        let tr = criaElemento("tr");//Elemento pai
        
        //childs
        let tdDescricao = criaElemento("td");
        let tdAutor = criaElemento("td");
        let tdDepartamento = criaElemento("td");
        let tdImportancia = criaElemento("td");
        let tdValor = criaElemento("td");
        let tdDuracao = criaElemento("td");
        
        //opções possiveis fazer com cada tarefa(são criadas toda vez que uma tarefa é adicionada)
        let btnAddValor = criaElemento("button");
        let btnAddDuracao = criaElemento("button");
        let btnConcluir = criaElemento("button");
        
        //Adicionando elementos na tabela
        adicionaElementoNatabela(tdDescricao, item.descricao, tr);
        adicionaElementoNatabela(tdAutor, item.autor, tr);
        adicionaElementoNatabela(tdDepartamento, item.departamento, tr);
        adicionaElementoNatabela(tdImportancia, item.importancia, tr);
        //Verifica se .valor não undefined
        if(item.valor !== undefined){
            adicionaElementoNatabela(tdValor, "R$"+item.valor , tr);
        }else{
            adicionaElementoNatabela(tdValor, "-", tr);
        }
        //Verifica se .duracao não é undefined
        if(item.duracao !== undefined){
            adicionaElementoNatabela(tdDuracao, item.duracao + "dias", tr)
        }
        else{
            adicionaElementoNatabela(tdDuracao, "-", tr)
        }
        
        //opções da tr
        adicionaElementoNatabela(btnAddValor, "Adicionar Valor", tr)
        adicionaElementoNatabela(btnAddDuracao, "Adicionar duração", tr)
        adicionaElementoNatabela(btnConcluir, "Concluir", tr)

        //thead's criados
        if(item.valor !== undefined){
            adicionaElementoNatabela(thValor, "Valor", trThead)
        }else{
            adicionaElementoNatabela(thValor, "Valor", trThead)
        }

        if(item.duracao !== undefined){
            adicionaElementoNatabela(thDuracao, "Duração", trThead)
        }else{
            adicionaElementoNatabela(thDuracao, "Duração", trThead)
        }
        
        adicionaElementoNatabela(thOpcoes, "Opções", trThead)
        
        
        //Botão concluir quando clicado ele remove uma tr da tabela
        btnConcluir.addEventListener("click", () => {
            tr.remove()
            deletaItem(item)
        });
        
        btnAddValor.addEventListener("click", () => {
            adicionaValor(item, tdValor, tr)
            
        })

        btnAddDuracao.addEventListener("click", ()=>{
            adicionaDuracao(item, tdDuracao, tr)
        })

        //adicionando a tr no tbody da tabela
        tbody.appendChild(tr)

    })
}

function adicionaValor(item) {
    const valor = parseFloat(prompt("Digite um valor: "));
    if (!isNaN(valor)) {
        item.valor = valor
        adicionaTarefaNaTabela(arrayTarefas)
    }
}

function adicionaDuracao(item){
    const duracao = parseInt(prompt("Digite a duração (em dias):"))
    if(!isNaN(duracao)){
        item.duracao = duracao
        adicionaTarefaNaTabela(arrayTarefas)
    }
}

//função para criar elemento no DOM
function criaElemento(elemento) {
    let element = document.createElement(elemento);
    return element;
}

/*função adiciona elementos na tabela, pega o elemento criado e 
muda o texto para devido conteudo e 
adiciona na tabela*/
function adicionaElementoNatabela(elemento, conteudo, pai) {
    elemento.textContent = conteudo;
    pai.appendChild(elemento)
}

function deletaItem(item) {
    const indexTarefa = arrayTarefas.indexOf(item)
    if (indexTarefa !== -1) {
        arrayTarefas.splice(indexTarefa, 1)
        adicionaTarefaNaTabela(arrayTarefas)
        if (arrayTarefas.length <= 0) {
            thOpcoes.remove()
        }
    }
}
