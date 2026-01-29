import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Colors } from '../../../utils';
import { Form, RHFTextInputComponent } from '../../../components';

const profileSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits').optional().or(z.literal('')),
    bio: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function EditProfileScreen() {
    const router = useRouter();

    const methods = useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            bio: '',
        },
    });

    const onSubmit = (data: ProfileFormData) => {
        console.log('Form Submitted:', data);
        // Handle save logic here
        router.back();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>
            <Text style={styles.subtitle}>Nested screen - No bottom tabs visible</Text>

            <Form methods={methods} style={styles.form}>
                <RHFTextInputComponent
                    name="fullName"
                    labelText="Full Name"
                    placeholder="Enter your name"
                    inputStyles={styles.input}
                    inputWrapperStyle={styles.inputWrapper}
                    isRequired={true}
                />

                <RHFTextInputComponent
                    name="email"
                    labelText="Email"
                    placeholder="Enter your email"
                    inputProperties={{ keyboardType: 'email-address' }}
                    inputStyles={styles.input}
                    inputWrapperStyle={styles.inputWrapper}
                    isRequired={true}
                />

                <RHFTextInputComponent
                    name="phone"
                    labelText="Phone"
                    placeholder="Enter your phone"
                    inputProperties={{ keyboardType: 'phone-pad' }}
                    inputStyles={styles.input}
                    inputWrapperStyle={styles.inputWrapper}
                />

                <RHFTextInputComponent
                    name="bio"
                    labelText="Bio"
                    placeholder="Tell us about yourself"
                    inputProperties={{ multiline: true, numberOfLines: 4 }}
                    inputStyles={[styles.input, styles.textArea]}
                    inputWrapperStyle={styles.inputWrapper}
                />
            </Form>

            <TouchableOpacity
                style={styles.saveButton}
                onPress={methods.handleSubmit(onSubmit)}
            >
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}>
                <Text style={styles.backButtonText}>Cancel</Text>
            </TouchableOpacity>
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
        color: Colors.primary,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    form: {
        marginVertical: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.textDark,
        marginBottom: 8,
        marginTop: 15,
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
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    backButton: {
        backgroundColor: '#F5F5F5',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    backButtonText: {
        color: Colors.textDark,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    inputWrapper: {
        marginBottom: 15,
    },
});
