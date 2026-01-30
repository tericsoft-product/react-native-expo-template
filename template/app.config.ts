export default ({ config }: any) => ({
    ...config,
    name: 'YourApp',
    slug: 'your-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
        image: './assets/splash-icon.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        bundleIdentifier: 'com.yourcompany.yourapp',
        supportsTablet: true,
        infoPlist: {
            NSCameraUsageDescription: 'This app uses the camera to take photos.',
            NSPhotoLibraryUsageDescription: 'This app accesses your photos.',
        },
    },
    android: {
        package: 'com.yourcompany.yourapp',
        adaptiveIcon: {
            foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#ffffff',
        },
        permissions: [
            'CAMERA',
            'READ_EXTERNAL_STORAGE',
            'WRITE_EXTERNAL_STORAGE',
        ],
    },
    web: {
        bundler: 'metro',
        favicon: './assets/favicon.png',
    },
    plugins: ['expo-router', 'expo-font'],
    experiments: {
        typedRoutes: true,
    },
    extra: {
        apiUrl: process.env.API_URL || 'https://api.yourapp.com',
        mode: process.env.MODE || 'development',
        buildType: process.env.BUILD_TYPE || 'dev',
        eas: {
            projectId: 'your-eas-project-id',
        },
    },
});
