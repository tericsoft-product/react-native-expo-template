import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function SettingsScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Main settings screen with bottom tabs visible</Text>

            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.settingItem}
                    onPress={() => router.push('/(settings)/account')}>
                    <Text style={styles.settingLabel}>Account Settings</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.settingItem}
                    onPress={() => router.push('/(settings)/privacy')}>
                    <Text style={styles.settingLabel}>Privacy Settings</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.settingItem}
                    onPress={() => router.push('/about')}>
                    <Text style={styles.settingLabel}>About</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                    💡 Click on any setting to navigate to its detail screen
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        color: Colors.primary,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
    },
    section: {
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        overflow: 'hidden',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
    },
    settingLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.textDark,
    },
    arrow: {
        fontSize: 20,
        color: Colors.primary,
    },
    infoBox: {
        backgroundColor: '#E3F2FD',
        padding: 15,
        borderRadius: 8,
        marginTop: 30,
    },
    infoText: {
        fontSize: 14,
        color: '#1976D2',
        textAlign: 'center',
    },
});
