'use client';

import { Todo } from '../types/todo';

type Props = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return <p className="text-gray-500 mt-4">There's nothing to do yet.</p>;
  }

  return (
    <ul className="mt-4 space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 border rounded hover:bg-gray-100 transition"
        >
          <span
            className={`cursor-pointer flex-1 ${
              todo.done ? 'line-through text-gray-400' : ''
            }`}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700 ml-4"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
