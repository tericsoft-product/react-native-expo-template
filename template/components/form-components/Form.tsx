import React, { ReactNode } from "react";
import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    UseFormReturn,
} from "react-hook-form";
import { View, StyleProp, ViewStyle } from "react-native";

interface FormProps<T extends FieldValues> {
    children: ReactNode;
    methods: UseFormReturn<T>;
    onSubmit?: SubmitHandler<T>;
    style?: StyleProp<ViewStyle>;
}

export default function Form<T extends FieldValues>({
    children,
    methods,
    onSubmit,
    style,
}: FormProps<T>) {
    return (
        <FormProvider {...methods}>
            <View style={style}>{children}</View>
        </FormProvider>
    );
}
