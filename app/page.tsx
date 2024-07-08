'use client';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
// import './../app/app.css';
import '@aws-amplify/ui-react/styles.css';
import { Button } from '@nextui-org/button';

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 w-1/2 m-auto'>
      <h1 className='text-3x1 font-bold underline'>Hello world</h1>
      <Button>Click me</Button>
    </main>
  );
}
