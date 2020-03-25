const { toBeDeepCloseTo }
    = require('jest-matcher-deep-close-to');
expect.extend({ toBeDeepCloseTo });

const Calculadora = require('../lib/calculadora');
let calculadora = new Calculadora();


describe('Calculadora', () => {
    test('Desenvolvedor e ganha mais de 3000', () => {
        let desenvolvedor = calculadora.montarSalario({
            nome: 'Joao da Silva',
            email: 'joao@gmail.com',
            salario_base: 3500,
            cargo: 'Desenvolvedor'
        });
        expect(desenvolvedor.length).toBe(1);
        expect(desenvolvedor[0]).toBeDeepCloseTo({
            salario_final: 2800
        }, 2);
    });
    test('Desenvolvedor e ganha menos de 3000', () => {
        let desenvolvedor = calculadora.montarSalario({
            nome: 'Carlos da Silva',
            email: 'carlos@gmail.com',
            salario_base: 2500,
            cargo: 'Desenvolvedor'
        });
        expect(desenvolvedor.length).toBe(1);
        expect(desenvolvedor[0]).toBeDeepCloseTo({
            salario_final: 2250
        }, 2);
    });
});
