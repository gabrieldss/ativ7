const { toBeDeepCloseTo }
    = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const Calculadora = require('../lib/calculadora');
let calculadora = new Calculadora();


describe('Calculadora', () => {

    //DESENVOLVEDOR
    test('Desenvolvedor e ganha 3000 ou mais', () => {
        let func = calculadora.montarSalario({
            nome: 'Joao da Silva',
            email: 'joao@gmail.com',
            salario_base: 3500,
            cargo: 'Desenvolvedor'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 2800
        }, 2);
    });
    test('Desenvolvedor e ganha menos de 3000', () => {
        let func = calculadora.montarSalario({
            nome: 'Carlos da Silva',
            email: 'carlos@gmail.com',
            salario_base: 2500,
            cargo: 'Desenvolvedor'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 2250
        }, 2);
    });

    //DBA
    test('DBA e ganha 2000 ou mais', () => {
        let func = calculadora.montarSalario({
            nome: 'Fernando da Silva',
            email: 'fernando@gmail.com',
            salario_base: 2200,
            cargo: 'DBA'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 1650
        }, 2);
    });
    test('DBA e ganha menos de 2000', () => {
        let func = calculadora.montarSalario({
            nome: 'Lúcia da Silva',
            email: 'lucia@gmail.com',
            salario_base: 1800,
            cargo: 'DBA'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 1530
        }, 2);
    });

    //TESTADOR
    test('Testador e ganha 2000 ou mais', () => {
        let func = calculadora.montarSalario({
            nome: 'Paula Morandi',
            email: 'pmorandi@hotmail.com',
            salario_base: 2700,
            cargo: 'Testador'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 2025
        }, 2);
    });
    test('Testador e ganha menos de 2000', () => {
        let func = calculadora.montarSalario({
            nome: 'Felipe Souza',
            email: 'lipe@hotmail.com',
            salario_base: 1950,
            cargo: 'Testador'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 1657.5
        }, 2);
    });

    //GERENTE
    test('Testador e ganha 5000 ou mais', () => {
        let func = calculadora.montarSalario({
            nome: 'Gabriel Souza',
            email: 'gabrielss@hotmail.com',
            salario_base: 6700,
            cargo: 'Gerente'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 4690
        }, 2);
    });
    test('Gerente e ganha menos de 5000', () => {
        let func = calculadora.montarSalario({
            nome: 'Carlos Santos',
            email: 'lipe@hotmail.com',
            salario_base: 4000,
            cargo: 'Gerente'
        });
        expect(func.length).toBe(1);
        expect(func[0]).toBeDeepCloseTo({
            salario_final: 3200
        }, 2);
    });
});
