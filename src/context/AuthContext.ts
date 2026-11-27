import { createContext } from "react";

export interface AuthContextValue {
    token: string | null;
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (name: string, email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);