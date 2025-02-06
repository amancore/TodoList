// This file provides stubbed functions for todo CRUD operations.
// Replace these with actual API calls to your backend.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let dummyTodos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false },
  { id: 2, title: "Build a ToDo App", completed: false }
];

export async function getTodos(): Promise<Todo[]> {
  return new Promise(resolve => setTimeout(() => resolve(dummyTodos), 500));
}

export async function addTodo(title: string): Promise<Todo> {
  const newTodo = { id: Date.now(), title, completed: false };
  dummyTodos.push(newTodo);
  return new Promise(resolve => setTimeout(() => resolve(newTodo), 500));
}

export async function updateTodo(id: number): Promise<Todo> {
  dummyTodos = dummyTodos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  const updatedTodo = dummyTodos.find(todo => todo.id === id)!;
  return new Promise(resolve => setTimeout(() => resolve(updatedTodo), 500));
}

export async function deleteTodo(id: number): Promise<void> {
  dummyTodos = dummyTodos.filter(todo => todo.id !== id);
  return new Promise(resolve => setTimeout(() => resolve(), 500));
}