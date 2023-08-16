const tarefa1 = {
    descricao: " Escovar os dentes",
    autor: " Eu",
    dep: " Higiene Pessoal",
    importância: " 2º",
    duração: "5 minutos"
}
const tarefa2 = {
    descricao: " Trabalhar",
    autor: " Eu",
    dep: " Negócios",
    importância: " 1º",
    duração: "6 horas"
}
const tarefa3 =  {
    descricao: " Limpar a casa",
    autor: " Diarista",
    dep: " Tarefa doméstica",
    importância: " 3º",
    duração: "3 horas",
    valor: "R$ 100,00 / hr"
}        
const tarefa4 = {
    descricao: " Exercitar-se",
    autor: " Eu",
    dep: " Saúde",
    importância: " 4º",
    duração: "1 hora"
}   
const tarefa5 = {
    descricao: " Cortar o cabelo",
    autor: " Cabeleireiro",
    dep: " Beleza",
    importância: " 5º",
    duração: "1 hora",
    valor: "R$ 80,00"
}

const botaoAddTarefa1 = document.querySelector("#btn1");
const botaoAddTarefa2 = document.querySelector("#btn2");
const botaoAddTarefa3 = document.querySelector("#btn3");
const botaoAddTarefa4 = document.querySelector("#btn4");
const botaoAddTarefa5 = document.querySelector("#btn5");

//Botao para adicionar a tarefa1

botaoAddTarefa1.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const listaTarefas = document.querySelector("#listaTarefa");
    let liTar = document.createElement("li");
    liTar.textContent = "Tarefa 1";
    listaTarefas.appendChild(liTar);
    
    const listaTarefasDes = document.querySelector("#listaDes");
    let liDes = document.createElement("li");
    liDes.textContent = tarefa1.descricao;
    listaTarefasDes.appendChild(liDes);

    const listaTarefasAut = document.querySelector("#listaAut");
    let liAut = document.createElement("li");
    liAut.textContent = tarefa1.autor;
    listaTarefasAut.appendChild(liAut);
    
    const listaTarefasDep = document.querySelector("#listaDep");
    let liDep = document.createElement("li");
    liDep.textContent = tarefa1.dep;
    listaTarefasDep.appendChild(liDep);

    const listaTarefasImp = document.querySelector("#listaImp");
    let liImp = document.createElement("li");
    liImp.textContent = tarefa1.importância;
    listaTarefasImp.appendChild(liImp);

    //Criando o botao de conclusão de tarefa
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " X "
    liTar.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        listaTarefasAut.removeChild(liAut)
        listaTarefas.removeChild(liTar)
        listaTarefasDep.removeChild(liDep)
        listaTarefasDes.removeChild(liDes)
        listaTarefasImp.removeChild(liImp)
    });
});

//Botao para adicionar a tarefa2

botaoAddTarefa2.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const listaTarefas = document.querySelector("#listaTarefa");
    let liTar = document.createElement("li");
    liTar.textContent = "Tarefa 2";
    listaTarefas.appendChild(liTar);

    const listaTarefasDes = document.querySelector("#listaDes");
    let liDes = document.createElement("li");
    liDes.textContent = tarefa2.descricao;
    listaTarefasDes.appendChild(liDes);

    const listaTarefasAut = document.querySelector("#listaAut");
    let liAut = document.createElement("li");
    liAut.textContent = tarefa2.autor;
    listaTarefasAut.appendChild(liAut);
    
    const listaTarefasDep = document.querySelector("#listaDep");
    let liDep = document.createElement("li");
    liDep.textContent = tarefa2.dep;
    listaTarefasDep.appendChild(liDep);

    const listaTarefasImp = document.querySelector("#listaImp");
    let liImp = document.createElement("li");
    liImp.textContent = tarefa2.importância;
    listaTarefasImp.appendChild(liImp);

    //Criando o botao de conclusão de tarefa
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " X "
    liTar.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        listaTarefasAut.removeChild(liAut)
        listaTarefas.removeChild(liTar)
        listaTarefasDep.removeChild(liDep)
        listaTarefasDes.removeChild(liDes)
        listaTarefasImp.removeChild(liImp)
    });
});

//Botao para adicionar a tarefa3

botaoAddTarefa3.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const listaTarefas = document.querySelector("#listaTarefa");
    let liTar = document.createElement("li");
    liTar.textContent = "Tarefa 3";
    listaTarefas.appendChild(liTar);

    const listaTarefasDes = document.querySelector("#listaDes");
    let liDes = document.createElement("li");
    liDes.textContent = tarefa3.descricao;
    listaTarefasDes.appendChild(liDes);

    const listaTarefasAut = document.querySelector("#listaAut");
    let liAut = document.createElement("li");
    liAut.textContent = tarefa3.autor;
    listaTarefasAut.appendChild(liAut);
    
    const listaTarefasDep = document.querySelector("#listaDep");
    let liDep = document.createElement("li");
    liDep.textContent = tarefa3.dep;
    listaTarefasDep.appendChild(liDep);

    const listaTarefasImp = document.querySelector("#listaImp");
    let liImp = document.createElement("li");
    liImp.textContent = tarefa3.importância;
    listaTarefasImp.appendChild(liImp);

    //Criando o botao de conclusão de tarefa
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " X "
    liTar.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        listaTarefasAut.removeChild(liAut)
        listaTarefas.removeChild(liTar)
        listaTarefasDep.removeChild(liDep)
        listaTarefasDes.removeChild(liDes)
        listaTarefasImp.removeChild(liImp)
    });
});

//Botao para adicionar a tarefa4

botaoAddTarefa4.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const listaTarefas = document.querySelector("#listaTarefa");
    let liTar = document.createElement("li");
    liTar.textContent = "Tarefa 4";
    listaTarefas.appendChild(liTar);

    const listaTarefasDes = document.querySelector("#listaDes");
    let liDes = document.createElement("li");
    liDes.textContent = tarefa4.descricao;
    listaTarefasDes.appendChild(liDes);

    const listaTarefasAut = document.querySelector("#listaAut");
    let liAut = document.createElement("li");
    liAut.textContent = tarefa4.autor;
    listaTarefasAut.appendChild(liAut);
    
    const listaTarefasDep = document.querySelector("#listaDep");
    let liDep = document.createElement("li");
    liDep.textContent = tarefa4.dep;
    listaTarefasDep.appendChild(liDep);

    const listaTarefasImp = document.querySelector("#listaImp");
    let liImp = document.createElement("li");
    liImp.textContent = tarefa4.importância;
    listaTarefasImp.appendChild(liImp);

    //Criando o botao de conclusão de tarefa
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " X "
    liTar.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        listaTarefasAut.removeChild(liAut)
        listaTarefas.removeChild(liTar)
        listaTarefasDep.removeChild(liDep)
        listaTarefasDes.removeChild(liDes)
        listaTarefasImp.removeChild(liImp)
    });
});

//Botao para adicionar a tarefa5

botaoAddTarefa5.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const listaTarefas = document.querySelector("#listaTarefa");
    let liTar = document.createElement("li");
    liTar.textContent = "Tarefa 5";
    listaTarefas.appendChild(liTar);

    const listaTarefasDes = document.querySelector("#listaDes");
    let liDes = document.createElement("li");
    liDes.textContent = tarefa5.descricao;
    listaTarefasDes.appendChild(liDes);

    const listaTarefasAut = document.querySelector("#listaAut");
    let liAut = document.createElement("li");
    liAut.textContent = tarefa5.autor;
    listaTarefasAut.appendChild(liAut);
    
    const listaTarefasDep = document.querySelector("#listaDep");
    let liDep = document.createElement("li");
    liDep.textContent = tarefa5.dep;
    listaTarefasDep.appendChild(liDep);

    const listaTarefasImp = document.querySelector("#listaImp");
    let liImp = document.createElement("li");
    liImp.textContent = tarefa5.importância;
    listaTarefasImp.appendChild(liImp);

    //Criando o botao de conclusão de tarefa
    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = " X "
    liTar.appendChild(botaoExcluir);

    botaoExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();
        listaTarefasAut.removeChild(liAut)
        listaTarefas.removeChild(liTar)
        listaTarefasDep.removeChild(liDep)
        listaTarefasDes.removeChild(liDes)
        listaTarefasImp.removeChild(liImp)
    });
});

//Fazendo a área de mais opções
const botaoValor = document.querySelector("#btnValor");
const botaoTempo = document.querySelector("#btnDura");
const botaoOrdem = document.querySelector("#btnOrd");

botaoValor.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const NovoTh = document.querySelector("#AddTh");
    let th = document.createElement("th");
    th.textContent = "Valores";
    NovoTh.appendChild(th);

    const NovoTd = document.querySelector("#AddTd");
    let td = document.createElement("td");
    td.textContent = tarefa3.valor + " - " + tarefa5.valor;
    NovoTd.appendChild(td);
    
});

botaoTempo.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const NovoTh = document.querySelector("#AddTh");
    let th = document.createElement("th");
    th.textContent = "Duração";
    NovoTh.appendChild(th);

    const NovoTd = document.querySelector("#AddTd");
    let td = document.createElement("td");
    td.textContent = tarefa1.duração + " - " + tarefa2.duração + " - " + tarefa3.duração + " - " + tarefa4.duração + " - " + tarefa5.duração;
    NovoTd.appendChild(td);
    
});

botaoOrdem.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const NovoTh = document.querySelector("#AddTh");
    let th = document.createElement("th");
    th.textContent = "Ordem";
    NovoTh.appendChild(th);

    const NovoTd = document.querySelector("#AddTd");
    let td = document.createElement("td");
    td.textContent = "Tarefa2 - Tarefa1 - Tarefa3 - Tarefa4 - Tarefa5"
    NovoTd.appendChild(td);
});