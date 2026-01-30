import React, { PropsWithChildren } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useController, Control } from 'react-hook-form';
import ToggleSwitchComponent from './ToggleSwitchComponent';

export interface RHFToggleSwitchComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    label?: string;
    onColor?: string;
    offColor?: string;
    size?: 'small' | 'large' | 'medium';
    labelStyle?: TextStyle;
    onToggle?: (val: boolean) => void;
    icon?: any;
    disabled?: boolean;
    testID?: string;
    contentWrapper?: StyleProp<ViewStyle>;
}

const RHFToggleSwitchComponent = (
    props: PropsWithChildren<RHFToggleSwitchComponentProps>,
) => {
    const {
        name,
        control,
        defaultValue,
        label,
        onColor,
        offColor,
        size,
        labelStyle,
        onToggle,
        icon,
        disabled,
        testID,
        contentWrapper,
    } = props;

    const { field } = useController({
        name,
        control,
        defaultValue: defaultValue,
    });

    return (
        <ToggleSwitchComponent
            isOn={field.value}
            label={label}
            onColor={onColor}
            offColor={offColor}
            size={size}
            labelStyle={labelStyle}
            onToggle={(val) => {
                field.onChange(val);
                if (onToggle) {
                    onToggle(val);
                }
            }}
            icon={icon}
            disabled={disabled}
            testID={testID}
            contentWrapper={contentWrapper}
        />
    );
};

export default RHFToggleSwitchComponent;
