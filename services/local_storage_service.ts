import AsyncStorage from '@react-native-async-storage/async-storage';

// Note: MMKV is installed but requires a custom dev build or prebuild to work
// Run `npx expo prebuild` or `eas build --profile development` to enable MMKV
// For now, using AsyncStorage which works with Expo Go

const setItem = async (key: string, data: any = {}) => {
    let value = data;
    if (typeof data === 'object') {
        value = JSON.stringify(value);
    }
    return await AsyncStorage.setItem(key, value);
};

const removeItem = (key: string) => {
    return AsyncStorage.removeItem(key);
};

const clearAll = () => {
    return new Promise<any>(async (resolve, reject) => {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear().then(resolve).catch(reject);
        } else {
            resolve(undefined);
        }
    });
};

const getItem = async (key: string) => {
    return await AsyncStorage.getItem(key);
};

export { setItem, getItem, removeItem, clearAll };

export default {
    setItem,
    getItem,
    removeItem,
    clearAll,
};
