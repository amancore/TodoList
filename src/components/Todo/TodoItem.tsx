import React from "react";

interface TodoItemProps {
	id: number;
	title: string;
	completed: boolean;
	onToggle: (id: number) => void;
	onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onToggle, onDelete }) => {
	return (
		<li>
			<span onClick={() => onToggle(id)} style={{ textDecoration: completed ? "line-through" : "none" }}>
				{title}
			</span>
			<button onClick={() => onDelete(id)}>Delete</button>
		</li>
	);
};

export default TodoItem;