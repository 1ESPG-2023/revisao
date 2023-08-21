// Criando um array com valores de um salário
const salarios = [1000,1200,1300,1400,1600,1700,1800,1900,2000,2100];
// console.log(salarios)

// Criando array para armazenar os salários p/ receber 15%
let salarios15 = [];

// Atribuindo um aumento de 15% para salários até 2k,  criando condição para que os salários recebam o aumento adequado
salarios15 = salarios.map((salario) => {
    if (salario <= 2000) {
        return salario * 1.15
    } else {
        return salario * 1.10
    }
});

console.log("Valor original dos salários:", salarios);
console.log("Valor dos salários com o aumento, sendo <2k+15% >2k+10%", salarios15);