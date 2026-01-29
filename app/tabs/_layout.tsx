import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#007AFF',
            }}>
            {/* Main Screens - Tabs Visible */}
            <Tabs.Screen
                name="(home)"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
                }}
            />
            <Tabs.Screen
                name="(profile)"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <Text style={{ color }}>👤</Text>,
                }}
            />
            <Tabs.Screen
                name="(settings)"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Text style={{ color }}>⚙️</Text>,
                }}
            />
        </Tabs>
    );
}
