
// Array com 10 salários
const salarios = [1500, 2200, 1800, 2500, 1900, 3000, 1700, 2100, 2400, 2800];

// Função para calcular o aumento com base no salário
function calcularAumento(salario) {
  if (salario <= 2000) {
    return salario * 1.15; // Aumento de 15%
  } else {
    return salario * 1.10; // Aumento de 10%
  }
}

// Aplicar o método map() para calcular os novos salários
const novosSalarios = salarios.map(salario => calcularAumento(salario));

// Utilizar o método filter() para selecionar salários acima de 2500
const salariosSuperiores2500 = novosSalarios.filter(salario => salario > 2500);

// Utilizar o método reduce() para somar os salários superiores a 2500
const somaSalarios = salariosSuperiores2500.reduce((acumulador, salario) => acumulador + salario, 0);

console.log("Salários iniciais:", salarios);
console.log("Novos salários:", novosSalarios);
console.log("Salários acima de 2500:", salariosSuperiores2500);
console.log("Soma dos salários acima de 2500:", somaSalarios);

//-------------------------------------------------------------------------------------------//

// O evento "DOMContentLoaded" é acionado quando a página HTML foi completamente carregada
document.addEventListener("DOMContentLoaded", () => {
  // Obtém referências aos elementos HTML que vamos usar
  const tabelaTarefas = document.getElementById("tabelaTarefas");
  const adicionarTarefaBtn = document.getElementById("adicionarTarefa");
  
  // Adiciona um ouvinte de evento ao botão "Adicionar Tarefa"
  adicionarTarefaBtn.addEventListener("click", () => {
    // Obtém os valores dos campos de entrada no formulário
    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;
    const departamento = document.getElementById("departamento").value;
    const importancia = parseInt(document.getElementById("importancia").value);
    
    // Chama a função para adicionar a tarefa ao array
    adicionarTarefa(descricao, autor, departamento, importancia);
    
    // Atualiza a tabela com as tarefas
    atualizarTabela();
  });
  
  // Um array para armazenar as tarefas
  const tarefas = [];
  
  // Função para adicionar uma nova tarefa ao array
  function adicionarTarefa(descricao, autor, departamento, importancia) {
    const tarefa = {
      descricao,
      autor,
      departamento,
      importancia,
      concluida: false
    };
    tarefas.push(tarefa);
  }
  
  // Função para atualizar a tabela de tarefas no HTML
  function atualizarTabela() {
    // Limpa a tabela antes de atualizar
    tabelaTarefas.innerHTML = "";
    
    // Itera sobre as tarefas no array e adiciona cada uma na tabela
    tarefas.forEach((tarefa, index) => {
      const row = tabelaTarefas.insertRow();
      
      // Insere os valores das colunas na linha da tabela
      row.insertCell().textContent = tarefa.descricao;
      row.insertCell().textContent = tarefa.autor;
      row.insertCell().textContent = tarefa.departamento;
      row.insertCell().textContent = tarefa.importancia;
      row.insertCell().textContent = tarefa.concluida ? "Sim" : "Não";
      
      // Cria um botão "Concluir" e adiciona um ouvinte de evento
      const acaoCell = row.insertCell();
      const concluirBtn = document.createElement("button");
      concluirBtn.textContent = "Concluir";
      concluirBtn.addEventListener("click", () => {
        // Marca a tarefa como concluída quando o botão é clicado
        tarefas[index].concluida = true;
        // Atualiza a tabela após marcar como concluída
        atualizarTabela();
      });
      acaoCell.appendChild(concluirBtn);

      // Cria um botão "Excluir" e adiciona um ouvinte de evento
    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.addEventListener("click", () => {
      // Remove a tarefa do array quando o botão é clicado
      tarefas.splice(index, 1);
      // Atualiza a tabela após remover a tarefa
      atualizarTabela();
    });
    acaoCell.appendChild(excluirBtn);

    });
  }
});