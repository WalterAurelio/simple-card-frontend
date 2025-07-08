// import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';
// import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

describe('<Counter />', () => {
  it('renders the Counter component', () => {
    render(<Counter />);
    const h2Element = screen.getByText('Count:');
    const countElement = screen.getByText('0');
    const buttonElement = screen.getByText('Increment');

    expect(h2Element).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it ('increments the count when the button is clicked', async () => {
    render(<Counter />);
    const countElement = screen.getByTestId('counter-value');
    const buttonElement = screen.getByRole('button', { name: /Increment/i });
  
    expect(countElement.textContent).toEqual('0');
    await userEvent.click(buttonElement);
    expect(countElement.textContent).toEqual('1');
  });
});