const salarios = [1300, 1500, 1600, 2500, 3000, 5000, 500, 1000, 1200, 1700]

const aumentoSalarios =  salarios.map(salarios => {
    if(salarios <= 2000){
        salarios *= 1.15
    }else{
        salarios *= 1.10
    }
    return salarios.toFixed(2)
})

console.log(aumentoSalarios)
const salariosSuperiores2500 = aumentoSalarios.filter(salario => salario >= 2500)
console.log(salariosSuperiores2500)

const somaValores = salariosSuperiores2500.reduce((acumulado, atual) => parseFloat(acumulado) + parseFloat(atual))
console.log(somaValores)



