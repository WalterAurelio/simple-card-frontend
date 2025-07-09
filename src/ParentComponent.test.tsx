import { fireEvent, render, screen } from '@testing-library/react';
import ParentComponent from './ParentComponent';

describe('<ParentComponent />', () => {
  it('updates the parent component text when child component is clicked', () => {
    render(<ParentComponent />);

    const inputElement = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(inputElement, { target: { value: 'Hello World' } });
    fireEvent.click(submitButton);

    const pElement = screen.getByTestId('paragraph-element');
    expect(pElement.textContent).toBe('Text: Hello World');
  });
});