import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Text style={styles.subtitle}>Main home screen with bottom tabs visible</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('./details')}>
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => router.push('/about')}>
                <Text style={styles.buttonText}>Go to About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.accentButton}
                onPress={() => router.push('./components')}>
                <Text style={styles.buttonText}>Components Showcase</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.primary,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 10,
        minWidth: 200,
    },
    secondaryButton: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 10,
        minWidth: 200,
    },
    accentButton: {
        backgroundColor: '#8B5CF6',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        marginVertical: 10,
        minWidth: 200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
