import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function DetailsScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <Text style={styles.subtitle}>Nested screen - No bottom tabs visible</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Screen Information</Text>
                <Text style={styles.cardText}>• This is a nested/detail screen</Text>
                <Text style={styles.cardText}>• Bottom tabs are hidden here</Text>
                <Text style={styles.cardText}>• Use back button or swipe to go back</Text>
                <Text style={styles.cardText}>• Works on web, iOS, and Android</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.back()}>
                <Text style={styles.buttonText}>← Go Back</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
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
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 12,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: Colors.textDark,
    },
    cardText: {
        fontSize: 14,
        color: Colors.textLight,
        marginBottom: 8,
        lineHeight: 20,
    },
    button: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
