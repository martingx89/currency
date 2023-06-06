import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCases = [
  { amount: '100', from: 'PLN', to: 'USD' },
  { amount: '20', from: 'USD', to: 'PLN' },
  { amount: '200', from: 'PLN', to: 'USD' },
  { amount: '345', from: 'USD', to: 'PLN' },
];

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    for (let objTest of testCases) {
      render(<ResultBox from={objTest.from} to={objTest.from} amount={objTest.amount} />);
    }
  });
  it('should render proper info about conversion when PLN -> USD', () => {
    render(<ResultBox from='PLN' to='USD' amount={5} />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('PLN 5.00 = $1.43');
  });
  it('should render proper info about conversion when USD -> PLN', () => {
    render(<ResultBox from='USD' to='PLN' amount={8} />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('$8.00 = PLN 28');
  });
  it('should render proper info when same currency selected', () => {
    render(<ResultBox from='PLN' to='PLN' amount={32} />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('PLN 32.00 = PLN 32');
  });
  it('should render "wrong value", if input value are less than "0"', () => {
    render(<ResultBox from='PLN' to='PLN' amount={-50} />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('Wrong value...');
  });
  it('should render "wrong value", if input value are less than "0" and USD->PLN', () => {
    render(<ResultBox from='USD' to='PLN' amount={-50} />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('Wrong value...');
  });
  it('should render "wrong value", if input value are less than "0" and PLN->USD', () => {
    render(<ResultBox from='PLN' to='USD' amount={-50} />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('Wrong value...');
  });
});
