import Constants from 'expo-constants';

export interface ENVTypes {
    apiUrl?: string;
    mode?: string;
    buildType?: string;
}

const ENV: ENVTypes = {
    apiUrl: Constants.expoConfig?.extra?.apiUrl || 'https://api.yourapp.com',
    mode: Constants.expoConfig?.extra?.mode || 'development',
    buildType: Constants.expoConfig?.extra?.buildType || 'dev',
};

// Full common url including host/api/
export default ENV;
