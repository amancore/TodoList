import React, { useState } from "react";

interface TodoFormProps {
	onSubmit: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title.trim()) {
			onSubmit(title);
			setTitle("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter new todo"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default TodoForm;