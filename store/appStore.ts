import { create } from 'zustand';

interface AppState {
    // Add your global app state here
    isOnline: boolean;

    // Actions
    setOnline: (online: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isOnline: true,

    setOnline: (online: boolean) => {
        set({ isOnline: online });
    },
}));

export default useAppStore;
