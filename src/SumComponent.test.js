// SumComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SumComponent from './SumComponent';

describe('SumComponent', () => {
  it('renders and calculates sum correctly', () => {
    render(<SumComponent />);

    const num1Input = screen.getByTestId('num1-input');
    const num2Input = screen.getByTestId('num2-input');
    const calculateButton = screen.getByTestId('calculate-button');

    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '7' } });
    fireEvent.click(calculateButton);

    const sumText = screen.getByTestId('sum-text');

    expect(sumText).toHaveTextContent('Sum: 12');
  });
});
