import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButtonGroup from "./index.js";

describe('RadioButtonGroup component', () => {  
  test('component renders without errors', () => {
    render(<RadioButtonGroup options={[]} onChange={() => {}} />);
    screen.debug()
  });

  test('options are correctly displayed', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];

    render(<RadioButtonGroup options={options} onChange={() => {}} />);
    
    options.forEach(option => {
      const radioLabel = screen.getByLabelText(option.label);
      expect(radioLabel).toBeInTheDocument();
    }); 
  });

  test('onChange callback is called correctly when an option is clicked', () => {
    const mockOnChange = jest.fn();
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    
    render(<RadioButtonGroup options={options} onChange={mockOnChange} />);
    fireEvent.click(screen.getByLabelText('Option 2'));
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('Option 2');
  });
});
