import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculator', () => {
    it('Must render without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Calculator />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Clear numbers field', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('inputNumbers')).toHaveValue('0'); 
    });

    it('2 + 3 - 1 = 4', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('='));
        expect(getByTestId('inputNumbers')).toHaveValue('4'); 
    }); 

    it('Sum 2 + 3 = 5', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('inputNumbers')).toHaveValue('5'); 
    });

    it('Sub 2 - 3 = -1', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('inputNumbers')).toHaveValue('-1'); 
    });

    it('Divide 6 - 3 = 2', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('6'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('inputNumbers')).toHaveValue('2'); 
    });
    
    it('Sum 2.3 + 2.5 = 4.8', () => {
        const { getByTestId, getByText } = render(<Calculator />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));
        expect(getByTestId('inputNumbers')).toHaveValue('4.8'); 
    });

});
