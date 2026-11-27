import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { login as apiLogin, register as apiRegister } from "../api";

const TOKEN_KEY = "token";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(
        () => localStorage.getItem(TOKEN_KEY)
    );

    async function login(email: string, password: string) {
        const data = await apiLogin(email, password);
        localStorage.setItem(TOKEN_KEY, data.token);
        setToken(data.token);
    }

    function logout() {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
    }

    async function register(name: string, email: string, password: string) {
        await apiRegister(name, email, password);
        await login(email, password);
    }

    return (
        <AuthContext value={{ token, isLoggedIn: token !== null, login, logout, register }}>
            {children}
        </AuthContext>
    );


}