import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Communications from '../services/communications_service';

interface User {
    id: string;
    email?: string;
    name?: string;
    // Add your user properties
}

interface AuthState {
    token: string | null;
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;

    // Actions
    setToken: (token: string) => void;
    setUser: (user: User) => void;
    login: (token: string, user: User) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
    checkAuth: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,

            setToken: (token: string) => {
                set({ token, isAuthenticated: !!token });
                // Notify communications service about token update
                Communications.updateLoginUserTokenSubject.next(token);
            },

            setUser: (user: User) => {
                set({ user });
            },

            login: (token: string, user: User) => {
                set({ token, user, isAuthenticated: true });
                // Notify communications service
                Communications.updateLoginUserTokenSubject.next(token);
            },

            logout: () => {
                set({ token: null, user: null, isAuthenticated: false });
                // Notify communications service
                Communications.logoutSubject.next(true);
            },

            checkAuth: async () => {
                const { token } = get();
                if (!token) {
                    set({ isAuthenticated: false });
                    return false;
                }

                set({ isLoading: true });
                try {
                    // You can add API validation here if needed
                    // For now, we trust the stored token
                    set({ isAuthenticated: true, isLoading: false });
                    return true;
                } catch (error) {
                    console.error('Auth check failed:', error);
                    set({ token: null, user: null, isAuthenticated: false, isLoading: false });
                    return false;
                }
            },

            setLoading: (loading: boolean) => {
                set({ isLoading: loading });
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                token: state.token,
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);

export default useAuthStore;
