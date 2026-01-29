import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function AccountSettingsScreen() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Account Settings</Text>
            <Text style={styles.subtitle}>Nested screen - No bottom tabs visible</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Information</Text>

                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter username"
                    defaultValue="johndoe"
                />

                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter email"
                    defaultValue="john.doe@example.com"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter phone"
                    defaultValue="+1 234 567 8900"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Security</Text>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Change Password</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Two-Factor Authentication</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}>
                <Text style={styles.backButtonText}>← Back to Settings</Text>
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
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.textDark,
        marginBottom: 8,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#F9F9F9',
    },
    actionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    actionText: {
        fontSize: 16,
        color: Colors.textDark,
    },
    arrow: {
        fontSize: 18,
        color: Colors.primary,
    },
    saveButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    backButton: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    backButtonText: {
        color: Colors.textDark,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
