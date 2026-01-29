import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    SafeAreaView,
} from 'react-native';
import { Colors } from '../../../utils';

// Import working components
import {
    ButtonComponent,
    CardComponent,
    LabelComponent,
} from '../../../components';

export default function ComponentsShowcaseScreen() {

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Components Showcase</Text>
                    <Text style={styles.headerSubtitle}>
                        Explore available UI components with clean examples
                    </Text>
                </View>

                {/* Section 1: Buttons */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>📦 Buttons</Text>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Primary Button" />
                        <View style={styles.componentDemo}>
                            <ButtonComponent
                                title="Click Me!"
                                onPress={() => Alert.alert('Success', 'Primary button clicked!')}
                                class="primary"
                            />
                        </View>
                    </CardComponent>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Secondary Button" />
                        <View style={styles.componentDemo}>
                            <ButtonComponent
                                title="Click Me!"
                                onPress={() => Alert.alert('Success', 'Secondary button clicked!')}
                                class="secondary"
                            />
                        </View>
                    </CardComponent>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Outline Button" />
                        <View style={styles.componentDemo}>
                            <ButtonComponent
                                title="Click Me!"
                                onPress={() => Alert.alert('Success', 'Outline button clicked!')}
                                type="outline"
                            />
                        </View>
                    </CardComponent>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Disabled Button" />
                        <View style={styles.componentDemo}>
                            <ButtonComponent
                                title="Disabled"
                                onPress={() => { }}
                                disabled={true}
                                class="primary"
                            />
                        </View>
                    </CardComponent>
                </View>

                {/* Section 2: Cards */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>� Cards</Text>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Basic Card" />
                        <Text style={styles.demoText}>
                            Cards are used to group related content and make the UI more organized.
                            This is a simple card component with a title and description.
                        </Text>
                    </CardComponent>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Card with Multiple Elements" />
                        <Text style={styles.demoText}>
                            You can add any content inside a card component
                        </Text>
                        <View style={styles.spacer} />
                        <ButtonComponent
                            title="Action Button"
                            onPress={() => Alert.alert('Info', 'Button inside card!')}
                            class="secondary"
                        />
                    </CardComponent>
                </View>

                {/* Section 3: Labels */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🏷️ Labels</Text>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Default Label" />
                        <View style={styles.spacer} />
                        <LabelComponent title="Another Label Example" />
                        <Text style={styles.demoText}>
                            Labels are used to display titles and headings within your components
                        </Text>
                    </CardComponent>
                </View>

                {/* Section 4: Component Combinations */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>🎨 Component Combinations</Text>

                    <CardComponent style={styles.card}>
                        <LabelComponent title="Profile Card Example" />
                        <View style={styles.profileCard}>
                            <Text style={styles.profileName}>John Doe</Text>
                            <Text style={styles.profileEmail}>john.doe@example.com</Text>
                            <View style={styles.spacer} />
                            <View style={styles.buttonRow}>
                                <View style={{ flex: 1, marginRight: 8 }}>
                                    <ButtonComponent
                                        title="Edit"
                                        onPress={() => Alert.alert('Edit', 'Edit profile')}
                                        class="primary"
                                        autoWidth={false}
                                    />
                                </View>
                                <View style={{ flex: 1, marginLeft: 8 }}>
                                    <ButtonComponent
                                        title="Share"
                                        onPress={() => Alert.alert('Share', 'Share profile')}
                                        type="outline"
                                        autoWidth={false}
                                    />
                                </View>
                            </View>
                        </View>
                    </CardComponent>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        ✨ All components are fully customizable and reusable ✨
                    </Text>
                    <Text style={styles.footerNote}>
                        For form components with Formik integration, check the login and registration screens
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.primary,
        padding: 24,
        paddingTop: 40,
        paddingBottom: 30,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#FFFFFF',
        opacity: 0.9,
    },
    section: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textDark,
        marginBottom: 16,
    },
    card: {
        marginBottom: 16,
        padding: 16,
    },
    componentDemo: {
        marginTop: 12,
    },
    spacer: {
        height: 12,
    },
    demoText: {
        fontSize: 14,
        color: Colors.textLight,
        lineHeight: 20,
        marginTop: 8,
    },
    profileCard: {
        backgroundColor: '#F5F5F5',
        padding: 20,
        borderRadius: 12,
        marginTop: 12,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.textDark,
    },
    profileEmail: {
        fontSize: 14,
        color: Colors.textLight,
        marginTop: 4,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        padding: 24,
        alignItems: 'center',
        marginBottom: 40,
    },
    footerText: {
        fontSize: 14,
        color: Colors.textLight,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 8,
    },
    footerNote: {
        fontSize: 12,
        color: Colors.textLight,
        textAlign: 'center',
    },
});
