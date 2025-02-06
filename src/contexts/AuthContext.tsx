import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
	user: any;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<any>(null);

	const login = async (username: string, password: string) => {
		// Add your authentication logic here.
		// For now, we simulate a login.
		setUser({ username });
	};

	const logout = () => {
		// Add your logout logic here.
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};