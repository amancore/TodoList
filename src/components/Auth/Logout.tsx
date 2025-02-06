import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		logout();
		navigate("/login");
	}, [logout, navigate]);

	return <p>Logging out...</p>;
};

export default Logout;