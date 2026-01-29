import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../../utils';

export default function PrivacySettingsScreen() {
    const router = useRouter();
    const [dataSharing, setDataSharing] = React.useState(false);
    const [analytics, setAnalytics] = React.useState(true);
    const [cookies, setCookies] = React.useState(true);
    const [locationTracking, setLocationTracking] = React.useState(false);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Privacy Settings</Text>
            <Text style={styles.subtitle}>Nested screen - No bottom tabs visible</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Data & Privacy</Text>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Data Sharing</Text>
                        <Text style={styles.settingDescription}>
                            Share data with third-party services
                        </Text>
                    </View>
                    <Switch
                        value={dataSharing}
                        onValueChange={setDataSharing}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Analytics</Text>
                        <Text style={styles.settingDescription}>
                            Help improve app with usage data
                        </Text>
                    </View>
                    <Switch
                        value={analytics}
                        onValueChange={setAnalytics}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Cookies</Text>
                        <Text style={styles.settingDescription}>
                            Allow cookies for better experience
                        </Text>
                    </View>
                    <Switch
                        value={cookies}
                        onValueChange={setCookies}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>

                <View style={styles.settingRow}>
                    <View style={styles.settingText}>
                        <Text style={styles.settingLabel}>Location Tracking</Text>
                        <Text style={styles.settingDescription}>
                            Enable location-based features
                        </Text>
                    </View>
                    <Switch
                        value={locationTracking}
                        onValueChange={setLocationTracking}
                        trackColor={{ false: '#DDD', true: Colors.primary }}
                    />
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Additional Options</Text>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Download My Data</Text>
                    <Text style={styles.arrow}>→</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionText}>Delete Account</Text>
                    <Text style={[styles.actionText, { color: '#F44336' }]}>⚠️</Text>
                </TouchableOpacity>
            </View>

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
