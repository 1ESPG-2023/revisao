// 1:

const salInicial = [
    {"salario" : '900'}, //1
    {"salario" : '1900'}, //2
    {"salario" : '2300'}, //3 *
    {"salario" : '2000'}, //4 *
    {"salario" : '1800'}, //5
    {"salario" : '4090'}, //6 *
    {"salario" : '1240'}, //7
    {"salario" : '5000'}, //8 *
    {"salario" : '1200'}, //9
    {"salario" : '3800'}, //10 *
]

console.log(`Os salarios iniciais são: ${salInicial.map(salInicial => salInicial.salario)}`)

const salAumt15 = salInicial.map(function(salInicial){
    if(salInicial.salario <= 2000){
        return salInicial.salario * 1.15
    }
});

salAumt15.splice(2,1)
salAumt15.splice(4,1)
salAumt15.splice(5,1)
salAumt15.splice(6,1)

const salAumt10 = salInicial.map(function(salInicial){
    if(salInicial.salario > 2000){
        return salInicial.salario * 1.1
    }
});

salAumt10.splice(0,1)
salAumt10.splice(0,1)
salAumt10.splice(1,2)
salAumt10.splice(2,1)
salAumt10.splice(3,1)

console.log(`Os salários após o aumento de 15%: ${salAumt15}`);
console.log(`Os salários após o aumento de 10%: ${salAumt10}`);

// 2:

const salFinal = []
salFinal.unshift(salAumt15[0], salAumt15[1], salAumt15[2], salAumt15[3], salAumt15[4], salAumt15[5])
salFinal.unshift(salAumt10[0], salAumt10[1], salAumt10[2], salAumt10[3])

const sal2500 = salFinal.filter(valor => valor > 2500)
console.log(`Os salários superiores a 2500 após os aumentos são: ${sal2500}`)

// 3:

const salSomados = sal2500.reduce((acumulado, atual) => acumulado + atual)
console.log(`Os salários superiores a 2500 somados resultam em: ${salSomados}`)