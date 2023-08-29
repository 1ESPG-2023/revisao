
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

