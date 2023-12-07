"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/firebase';
import { User } from 'firebase/auth';

type AuthContextType = {
    user: User | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

export const useAuth = () => {
    return useContext(AuthContext);
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                setUser(userAuth);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authContextValue: AuthContextType = {
        user,
        loading,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};