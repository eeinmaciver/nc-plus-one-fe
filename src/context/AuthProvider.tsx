import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { login as apiLogin } from "../api";

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

    return (
        <AuthContext value={{ token, isLoggedIn: token !== null, login, logout }}>
            {children}
        </AuthContext>
    );


}