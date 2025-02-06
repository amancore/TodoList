import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();
		// Insert registration logic here.
		// For now, we'll just redirect to login.
		navigate("/login");
	};

	return (
		<div className="auth-container">
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
				<div>
					<label>Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;