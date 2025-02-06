import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../services/todo.service";

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

const TodoList: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	useEffect(() => {
		async function fetchTodos() {
			const todos = await getTodos();
			setTodos(todos);
		}
		fetchTodos();
	}, []);

	const handleAddTodo = async (title: string) => {
		const newTodo = await addTodo(title);
		setTodos([...todos, newTodo]);
	};

	const handleToggleTodo = async (id: number) => {
		const updatedTodo = await updateTodo(id);
		setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
	};

	const handleDeleteTodo = async (id: number) => {
		await deleteTodo(id);
		setTodos(todos.filter(todo => todo.id !== id));
	};

	return (
		<div className="todo-list">
			<h2>Your Todos</h2>
			<TodoForm onSubmit={handleAddTodo} />
			<ol>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						{...todo}
						onToggle={handleToggleTodo}
						onDelete={handleDeleteTodo}
					/>
				))}
			</ol>
		</div>
	);
};

export default TodoList;