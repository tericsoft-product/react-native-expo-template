import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function ProfileSettingsScreen() {
    const router = useRouter();
    const [notifications, setNotifications] = React.useState(true);
    const [publicProfile, setPublicProfile] = React.useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Profile Settings</Text>
            <Text style={styles.subtitle}>Nested screen - No bottom tabs visible</Text>

            <View style={styles.settingsGroup}>
                <Text style={styles.groupTitle}>Visibility</Text>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Public Profile</Text>
                        <Text style={styles.settingDescription}>
                            Make your profile visible to everyone
                        </Text>
                    </View>
                    <Switch
                        value={publicProfile}
                        onValueChange={setPublicProfile}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Show Email</Text>
                        <Text style={styles.settingDescription}>
                            Display email on your profile
                        </Text>
                    </View>
                    <Switch
                        value={false}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>
            </View>

            <View style={styles.settingsGroup}>
                <Text style={styles.groupTitle}>Notifications</Text>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Profile Updates</Text>
                        <Text style={styles.settingDescription}>
                            Get notified about profile changes
                        </Text>
                    </View>
                    <Switch
                        value={notifications}
                        onValueChange={setNotifications}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>
            </View>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}>
                <Text style={styles.backButtonText}>← Back to Profile</Text>
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
    settingsGroup: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
    },
    groupTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginBottom: 15,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    settingText: {
        flex: 1,
        marginRight: 15,
    },
    settingLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textDark,
        marginBottom: 4,
    },
    settingDescription: {
        fontSize: 12,
        color: Colors.textLight,
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
});
