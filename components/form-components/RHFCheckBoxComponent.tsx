import React, { useEffect, useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import { useController, Control } from 'react-hook-form';
import CheckboxComponent from './CheckBoxComponent';
import { verticalScale } from 'react-native-size-matters';
import CommonStyles from '../../utils/CommonStyles';

export interface RHFCheckboxComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    labelText?: string;
    onUpdate?: (value: any) => void;
    disabled?: boolean;
    errorText?: StyleProp<TextStyle>;
    errorMessage?: any;
    testID?: string;
    label: string;
    contentWrapper?: StyleProp<ViewStyle>;
    class?: 'primary' | 'secondary' | 'success';
    baseStyle?: StyleProp<ViewStyle>;
    errorContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
}

const RHFCheckboxComponent = (props: RHFCheckboxComponentProps) => {
    const {
        name,
        control,
        defaultValue,
        labelText,
        onUpdate,
        disabled,
        errorText,
        errorMessage,
        testID,
        label,
        contentWrapper,
    } = props;

    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: defaultValue || false,
    });

    const classType = props.class === undefined ? 'primary' : props.class;
    const baseStyle = props.baseStyle || {};
    const errorContainerStyle = props.errorContainerStyle || {};
    const [selected, setSelected] = useState<boolean>(field.value);

    useEffect(() => {
        setSelected(field.value);
    }, [field.value]);

    const hasError = !!fieldState.error;
    const style: any = props.style || {};

    return (
        <View style={[baseStyle]}>
            <View style={[style]}>
                {(errorMessage || hasError) && (
                    <View
                        style={[
                            styles.errorContainer,
                            styles.baseErrorContainerStyle,
                            errorContainerStyle,
                        ]}>
                        <Text style={[CommonStyles.errorText, errorText]}>
                            {errorMessage || fieldState.error?.message}
                        </Text>
                    </View>
                )}
                <View>
                    <CheckboxComponent
                        testID={testID}
                        class={classType}
                        disabled={disabled}
                        checked={selected}
                        contentWrapper={contentWrapper}
                        onUpdate={value => {
                            setSelected(value);
                            field.onChange(value);
                            if (onUpdate) {
                                onUpdate(value);
                            }
                        }}
                        label={label}
                        labelText={labelText}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    baseErrorContainerStyle: {
        top: verticalScale(-30),
    },
    errorContainer: {
        marginVertical: verticalScale(3),
        position: 'absolute',
        right: 0,
    },
});

export default RHFCheckboxComponent;
