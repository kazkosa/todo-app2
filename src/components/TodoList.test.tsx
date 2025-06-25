import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { Todo } from '../types/todo';

describe('TodoList', () => {
  const mockTodos: Todo[] = [
    { id: '1', text: 'テストタスク1', done: false },
    { id: '2', text: 'テストタスク2', done: true },
  ];

  it('shows empty message when no todos', () => {
    render(<TodoList todos={[]} onToggle={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText("There's nothing to do yet.")).toBeInTheDocument();
  });

  it('renders todo items when todos exist', () => {
    render(<TodoList todos={mockTodos} onToggle={jest.fn()} onDelete={jest.fn()} />);
    expect(screen.getByText('テストタスク1')).toBeInTheDocument();
    expect(screen.getByText('テストタスク2')).toBeInTheDocument();
  });

  it('calls onToggle when todo text is clicked', () => {
    const onToggleMock = jest.fn();
    render(<TodoList todos={mockTodos} onToggle={onToggleMock} onDelete={jest.fn()} />);
    
    fireEvent.click(screen.getByText('テストタスク1'));
    expect(onToggleMock).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when delete button is clicked', () => {
    const onDeleteMock = jest.fn();
    render(<TodoList todos={mockTodos} onToggle={jest.fn()} onDelete={onDeleteMock} />);
    
    const deleteButtons = screen.getAllByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButtons[1]); // 2つ目のタスクの削除ボタンを押す
    expect(onDeleteMock).toHaveBeenCalledWith('2');
  });
});
