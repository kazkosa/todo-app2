'use client';

import { useEffect, useState } from 'react';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/todos');
      if (!res.ok) throw new Error('Failed to get Todo');
      const data = await res.json();
      setTodos(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'An unknown error has occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (text: string) => {
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Add failed');
      await fetchTodos();
    } catch (err: any) {
      setError(err.message || 'An error occurred when adding');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Delete failed');
      await fetchTodos();
    } catch (err: any) {
      setError(err.message || 'An error occurred during deletion');
    }
  };

  const handleToggle = async (id: string) => {
    try {
      const res = await fetch(`/api/todos/${id}/toggle`, {
        method: 'PATCH',
      });
      if (!res.ok) throw new Error('State change failed');
      await fetchTodos();
    } catch (err: any) {
      setError(err.message || 'An error occurred during update');
    }
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Todo App</h1>

      {error && (
        <p className="text-red-500 bg-red-100 border border-red-300 p-2 rounded mb-4">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <>
          <TodoForm onAdd={handleAdd} />
          <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
        </>
      )}
    </main>
  );
}
