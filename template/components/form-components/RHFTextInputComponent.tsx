import React, { useState } from 'react';
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import {useController, Control} from 'react-hook-form';
import TextInputComponent from './TextInputComponent';
import { verticalScale } from 'react-native-size-matters';
import { Colors } from '../../utils';
import CommonStyles from '../../utils/CommonStyles';

export interface RHFInputComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    showLabel?: boolean;
    labelText: string;
    focusBackgroundColor?: StyleProp<TextStyle>;
    onBlurBackgroundColor?: string;
    inputStyles?: StyleProp<TextStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    errorText?: StyleProp<TextStyle>;
    errorContainerStyle?: StyleProp<ViewStyle>;
    baseStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    inputWrapperStyle?: StyleProp<ViewStyle>;
    isPassword?: boolean;
    onUpdate?: (value: any) => void;
    inputProperties?: TextInputProps;
    trimSpaces?: boolean;
    trimSpecialCharacters?: boolean;
    trimNumbers?: boolean;
    trimLeft?: boolean;
    trimCharacters?: boolean;
    secureTextEntry?: any;
    errorMessage?: any;
    isRequired?: boolean;
    editable?: boolean;
    placeholder?: string;
}

const RHFTextInputComponent = (props: RHFInputComponentProps) => {
    const {
        name,
        control,
        defaultValue,
        labelText,
        inputProperties,
        onUpdate,
        errorMessage,
        errorText,
        labelTextStyle,
        editable,
        showLabel,
        placeholder,
    } = props;

    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: defaultValue || '',
    });

    const [hasFocus, setHasFocus] = useState(false);

    const inputStyles = props.inputStyles || {};
    const baseStyle = props.baseStyle || {};
    const inputWrapperStyle = props.inputWrapperStyle || {};
    const errorContainerStyle = props.errorContainerStyle || {};

    const hasError = !!fieldState.error;
    const trimLeft = props.trimLeft === undefined ? false : props.trimLeft;
    const trimCharacters =
        props.trimCharacters === undefined ? false : props.trimCharacters;
    const trimNumbers =
        props.trimNumbers === undefined ? false : props.trimNumbers;
    const isRequired = props.isRequired !== undefined ? props.isRequired : true;
    const trimSpecialCharacters =
        props.trimSpecialCharacters === undefined
            ? false
            : props.trimSpecialCharacters;
    const trimSpaces = props.trimSpaces === undefined ? false : props.trimSpaces;

    const onUpdates = (text: string) => {
        field.onChange(text);
        if (onUpdate) {
            onUpdate(text);
        }
    };

    const onInputBlur = () => {
        setHasFocus(false);
        field.onBlur();
    };
    const onFocus = () => {
        setHasFocus(true);
    };

    return (
        <View style={[styles.inputBaseWrapper, baseStyle, inputWrapperStyle]}>
          <TextInputComponent
                trimSpaces={trimSpaces}
                editable={editable}
                trimSpecialCharacters={trimSpecialCharacters}
                trimNumbers={trimNumbers}
                trimCharacters={trimCharacters}
                trimLeft={trimLeft}
                onUpdate={onUpdates}
                placeholderTextColor={'#D3D3D3'}
                inputStyles={[
                    inputStyles,
                    {
                        borderColor: hasFocus
                            ? Colors.primary
                            : hasError
                                ? Colors.error
                                : Colors.textDark,
                    },
                ]}
                inputProperties={inputProperties}
                value={field.value}
                onFocus={onFocus}
                nativeID={name}
                placeholder={placeholder}
                testID={name}
                onInputBlur={onInputBlur}
                labelText={labelText}
                showLabel={showLabel}
                labelTextStyle={labelTextStyle}
                isRequired={isRequired}
            />

            {(errorMessage || hasError) && (
                <View
                    style={[
                        CommonStyles.errorContainer,
                        CommonStyles.baseErrorContainerStyle,
                        errorContainerStyle,
                    ]}>
                    <Text style={[CommonStyles.errorText, errorText]}>
                        {errorMessage || fieldState.error?.message}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputBaseWrapper: {
        marginVertical: verticalScale(5),
    },
});

export default RHFTextInputComponent;
