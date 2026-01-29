import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../utils';

export default function AboutScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.subtitle}>General screen - No bottom tabs visible</Text>

            <View style={styles.card}>
                <Text style={styles.appName}>Expo Production Template</Text>
                <Text style={styles.version}>Version 1.0.0</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Information</Text>
                <Text style={styles.infoText}>
                    This is a production-ready Expo template with:
                </Text>
                <Text style={styles.bulletPoint}>• File-based routing with Expo Router</Text>
                <Text style={styles.bulletPoint}>• TypeScript support</Text>
                <Text style={styles.bulletPoint}>• Zustand for state management</Text>
                <Text style={styles.bulletPoint}>• React Query for data fetching</Text>
                <Text style={styles.bulletPoint}>• Nested navigation examples</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Links</Text>

                <TouchableOpacity
                    style={styles.linkButton}
                    onPress={() => Linking.openURL('https://expo.dev')}>
                    <Text style={styles.linkText}>Expo Documentation</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.linkButton}
                    onPress={() => Linking.openURL('https://reactnative.dev')}>
                    <Text style={styles.linkText}>React Native Docs</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}>
                <Text style={styles.backButtonText}>← Go Back</Text>
            </TouchableOpacity>

            <Text style={styles.footer}>Made with ❤️ using Expo</Text>
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.primary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 30,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginBottom: 8,
    },
    version: {
        fontSize: 14,
        color: Colors.textLight,
    },
    section: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginBottom: 15,
    },
    infoText: {
        fontSize: 14,
        color: Colors.textLight,
        lineHeight: 22,
        marginBottom: 10,
    },
    bulletPoint: {
        fontSize: 14,
        color: Colors.textLight,
        lineHeight: 24,
        marginLeft: 10,
    },
    linkButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    linkText: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: '500',
    },
    arrow: {
        fontSize: 18,
        color: Colors.primary,
    },
    backButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    footer: {
        textAlign: 'center',
        color: Colors.textLight,
        fontSize: 12,
        marginTop: 30,
        marginBottom: 20,
    },
});
