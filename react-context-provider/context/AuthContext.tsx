import React, { ReactNode, createContext, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean
    login: () => void
    logout: () => void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ login, logout, isLoggedIn }}>{children}</AuthContext.Provider>
    )
}