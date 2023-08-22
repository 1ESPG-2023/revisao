//Declaração de objetos
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

    //Adicionando o nome da tarefa
    const listaTarefas = document.querySelector("#listaTarefa");
    let liTar = document.createElement("li");
    liTar.textContent = "Tarefa 1";
    listaTarefas.appendChild(liTar);
    
    //Adicionando a descrição desta tarefa pelo objeto
    const listaTarefasDes = document.querySelector("#listaDes");
    let liDes = document.createElement("li");
    liDes.textContent = tarefa1.descricao;
    listaTarefasDes.appendChild(liDes);

    //Adicionando o autor desta tarefa pelo objeto
    const listaTarefasAut = document.querySelector("#listaAut");
    let liAut = document.createElement("li");
    liAut.textContent = tarefa1.autor;
    listaTarefasAut.appendChild(liAut);
    
    //Adicionando o departamento desta tarefa pelo objeto
    const listaTarefasDep = document.querySelector("#listaDep");
    let liDep = document.createElement("li");
    liDep.textContent = tarefa1.dep;
    listaTarefasDep.appendChild(liDep);

    //Adicionando a importância desta tarefa pelo objeto
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
    let td = document.createElement("li");
    td.textContent = tarefa1.valor;
    NovoTd.appendChild(td);

    const NovoTd2 = document.querySelector("#AddTd");
    let td2 = document.createElement("li");
    td2.textContent = tarefa2.valor;
    NovoTd2.appendChild(td2);

    const NovoTd3 = document.querySelector("#AddTd");
    let td3 = document.createElement("li");
    td3.textContent = tarefa3.valor;
    NovoTd3.appendChild(td3);

    const NovoTd4 = document.querySelector("#AddTd");
    let td4 = document.createElement("li");
    td4.textContent = tarefa4.valor;
    NovoTd4.appendChild(td4);

    const NovoTd5 = document.querySelector("#AddTd");
    let td5 = document.createElement("li");
    td5.textContent = tarefa5.valor;
    NovoTd5.appendChild(td5);
    
});

botaoTempo.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const NovoTh = document.querySelector("#AddTh2");
    let th = document.createElement("th");
    th.textContent = "Duração";
    NovoTh.appendChild(th);

    const NovoTd = document.querySelector("#AddTd2");
    let td = document.createElement("li");
    td.textContent = tarefa1.duração;
    NovoTd.appendChild(td);

    const NovoTd2 = document.querySelector("#AddTd2");
    let td2 = document.createElement("li");
    td2.textContent = tarefa2.duração;
    NovoTd2.appendChild(td2);

    const NovoTd3 = document.querySelector("#AddTd2");
    let td3 = document.createElement("li");
    td3.textContent = tarefa3.duração;
    NovoTd3.appendChild(td3);

    const NovoTd4 = document.querySelector("#AddTd2");
    let td4 = document.createElement("li");
    td4.textContent = tarefa4.duração;
    NovoTd4.appendChild(td4);

    const NovoTd5 = document.querySelector("#AddTd2");
    let td5 = document.createElement("li");
    td5.textContent = tarefa5.duração;
    NovoTd5.appendChild(td5);
    
});

botaoOrdem.addEventListener("click", (evt)=>{
    //Prevenindo o reload da página.
    evt.preventDefault();

    const NovoTh = document.querySelector("#AddTh3");
    let th = document.createElement("th");
    th.textContent = "Ordem";
    NovoTh.appendChild(th);

    
    const NovoTd = document.querySelector("#AddTd3");
    let td = document.createElement("li");
    td.textContent = `A tarefa 1 está com importância de ${tarefa1.importância}`;
    NovoTd.appendChild(td);
    
    const NovoTd2 = document.querySelector("#AddTd3");
    let td2 = document.createElement("li");
    td2.textContent = `A tarefa 2 está com importância de ${tarefa2.importância}`;
    NovoTd2.appendChild(td2);
    
    const NovoTd3 = document.querySelector("#AddTd3");
    let td3 = document.createElement("li");
    td3.textContent = `A tarefa 3 está com importância de ${tarefa3.importância}`;
    NovoTd3.appendChild(td3);
    
    const NovoTd4 = document.querySelector("#AddTd3");
    let td4 = document.createElement("li");
    td4.textContent = `A tarefa 4 está com importância de ${tarefa4.importância}`;
    NovoTd4.appendChild(td4);
    
    const NovoTd5 = document.querySelector("#AddTd3");
    let td5 = document.createElement("li");
    td5.textContent = `A tarefa 5 está com importância de ${tarefa5.importância}`;
    NovoTd5.appendChild(td5);

    const NovoTh2 = document.querySelector("#AddTh3");
    let th2 = document.createElement("th");
    th2.textContent = "";
    NovoTh2.appendChild(th2);
    const NovoTh3 = document.querySelector("#AddTh3");
    let th3 = document.createElement("th");
    th3.textContent = "Descrição";
    NovoTh3.appendChild(th3);

    const Novo11 = document.querySelector("#AddTd3");
    let td11 = document.createElement("td");
    Novo11.appendChild(td11);

    const NovoTd6 = document.querySelector("#AddTd3");
    let td6 = document.createElement("li");
    td6.textContent =  tarefa1.descricao;
    NovoTd6.appendChild(td6);

    const NovoTd7 = document.querySelector("#AddTd3");
    let td7 = document.createElement("li");
    td7.textContent = tarefa2.descricao;
    NovoTd7.appendChild(td7);

    const NovoTd8 = document.querySelector("#AddTd3");
    let td8 = document.createElement("li");
    td8.textContent = tarefa3.descricao;
    NovoTd8.appendChild(td8);

    const NovoTd9 = document.querySelector("#AddTd3");
    let td9 = document.createElement("li");
    td9.textContent = tarefa4.descricao;
    NovoTd9.appendChild(td9);

    const NovoTd10 = document.querySelector("#AddTd3");
    let td10 = document.createElement("li");
    td10.textContent = tarefa5.descricao;
    NovoTd10.appendChild(td10);
});