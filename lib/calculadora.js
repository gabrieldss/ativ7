class Calculadora {
    montarSalario(desenvolvedor) {
        const salarios = [];
        if (desenvolvedor.salario_base >= 3000.00)
            salarios.push({
                salario_final: desenvolvedor.salario_base * 0.8
            });
        if (desenvolvedor.salario_base < 3000.00)
            salarios.push({
                salario_final: desenvolvedor.salario_base * 0.9
            });

        return salarios;
    }
}


module.exports = Calculadora;