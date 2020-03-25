class Calculadora {
    montarSalario(func) {
        const salarios = [];
        if (func.cargo == 'Desenvolvedor' && func.salario_base >= 3000.00)
            salarios.push({
                salario_final: func.salario_base * 0.8
            });
        if (func.cargo == 'Desenvolvedor' && func.salario_base < 3000.00)
            salarios.push({
                salario_final: func.salario_base * 0.9
            });

        if (func.cargo == 'DBA' && func.salario_base >= 2000.00)
            salarios.push({
                salario_final: func.salario_base * 0.75
            });
        if (func.cargo == 'DBA' && func.salario_base < 2000.00)
            salarios.push({
                salario_final: func.salario_base * 0.85
            });

        if (func.cargo == 'Testador' && func.salario_base >= 2000.00)
            salarios.push({
                salario_final: func.salario_base * 0.75
            });
        if (func.cargo == 'Testador' && func.salario_base < 2000.00)
            salarios.push({
                salario_final: func.salario_base * 0.85
            });

        return salarios;
    }
}


module.exports = Calculadora;