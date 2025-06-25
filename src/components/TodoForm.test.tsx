import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';
import { act } from 'react-dom/test-utils';

describe('TodoForm', () => {
  it('calls onAdd with the entered value', async () => {
    const onAddMock = jest.fn();
    render(<TodoForm onAdd={onAddMock} />);

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText('Enter To Do'), {
        target: { value: 'TestTask' },
      });
      fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    });

    expect(onAddMock).toHaveBeenCalledWith('TestTask');
  });
});
