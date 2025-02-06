import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header>
			<img src="/assets/images/logo.png" alt="Logo" />
			<nav>
				<ul>
					<li>
						<Link to="/">Todos</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<Link to="/logout">Logout</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;