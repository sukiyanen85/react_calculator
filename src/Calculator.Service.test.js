import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorService from './Calculator.Service';

describe('Testing Calculator', () => {
    const [ calcular, concatNumbers, SUM, SUB, DIV, MULT ] = CalculatorService();

    it('Sum 1 + 4 = 5', () => {
         let soma = calcular(1, 4, SUM);
         expect(soma).toEqual(5);   
    });

    
    it('Sub 1 - 4 = -3', () => {
        let sub = calcular(1, 4, SUB);
        expect(sub).toEqual(-3);   
   });
   
    it('Multiply 1 * 4 = 4', () => {
        let mult = calcular(1, 4, MULT);
        expect(mult).toEqual(4);   
    });

    it('Div 1 / 4 = 0.25', () => {
        let div = calcular(1, 4, DIV);
        expect(div).toEqual(0.25);   
    });

    it('Invalid Operation', () => {
        let invalid = calcular(1, 4, '%');
        expect(invalid).toEqual(0);
    });
});