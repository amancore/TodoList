import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import TodoList from "../components/Todo/TodoList";
import PrivateRoute from "../components/Shared/PrivateRoute";
import Logout from "../components/Auth/Logout";

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/logout" element={<Logout />} />
				<Route
					path="/"
					element={
						<PrivateRoute>
							<TodoList />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default AppRoutes;