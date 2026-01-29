import React, { PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useController, Control } from 'react-hook-form';
import DropdownComponent from './DropdownComponent';
import { Colors } from '../../utils';
import CommonStyles from '../../utils/CommonStyles';

export interface RHFDropdownComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    data: any;
    onUpdate?: (value: any) => void;
    contentWrapper?: StyleProp<ViewStyle>;
    search?: boolean;
    placeholder?: string;
    multiple?: boolean;
    style?: StyleProp<ViewStyle>;
    errorText?: StyleProp<TextStyle>;
    showLabel?: boolean;
    errorMessage?: any;
    labelText: string;
    isRequired?: boolean;
    testID?: string;
    errorContainerStyle?: StyleProp<ViewStyle>;
    dropdownPosition?: 'top' | 'bottom' | 'auto';
}

const RHFDropdownComponent = (
    props: PropsWithChildren<RHFDropdownComponentProps>,
) => {
    const {
        name,
        control,
        defaultValue,
        data,
        onUpdate,
        contentWrapper,
        errorText,
        search,
        placeholder,
        multiple,
        style,
        showLabel,
        errorMessage,
        labelText,
        isRequired,
        testID,
    } = props;

    const { field, fieldState } = useController({
        name,
        control,
        defaultValue,
    });

    const hasError = !!fieldState.error;
    const errorContainerStyle = props.errorContainerStyle || {};

    return (
        <View style={[contentWrapper]}>
            <View>
                <DropdownComponent
                    dropdownPosition={props?.dropdownPosition}
                    testID={testID}
                    data={data}
                    value={field.value}
                    search={search}
                    showLabel={showLabel}
                    labelText={labelText}
                    isRequired={isRequired}
                    contentWrapper={contentWrapper}
                    multiple={multiple}
                    onUpdate={option => {
                        field.onChange(option);
                        if (onUpdate) {
                            onUpdate(option);
                        }
                    }}
                    placeholder={placeholder}
                    style={[
                        { borderColor: hasError ? Colors.warn : Colors.borderColor },
                        style,
                    ]}
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
        </View>
    );
};

export default RHFDropdownComponent;
