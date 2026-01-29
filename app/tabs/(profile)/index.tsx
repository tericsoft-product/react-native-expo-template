import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function ProfileScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
            <Text style={styles.subtitle}>Main profile screen with bottom tabs visible</Text>

            <View style={styles.profileCard}>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileEmail}>john.doe@example.com</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('./edit')}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('./settings')}>
                <Text style={styles.buttonText}>Profile Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
        color: Colors.primary,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    profileCard: {
        backgroundColor: '#F5F5F5',
        padding: 30,
        borderRadius: 12,
        marginBottom: 30,
        alignItems: 'center',
        width: '100%',
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 14,
        color: Colors.textLight,
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 10,
        minWidth: 250,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
