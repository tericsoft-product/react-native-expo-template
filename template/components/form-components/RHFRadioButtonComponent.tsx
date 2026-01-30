import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useController, Control } from 'react-hook-form';
import RadioButtonComponent from './RadioButtonComponent';
import { TextStyle } from 'react-native';

export interface RHFRadioButtonComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    checked?: boolean;
    style?: StyleProp<ViewStyle>;
    value?: string | number | boolean;
    onChange?: (value: string | number | boolean | undefined) => void;
    label?: string;
    class?: 'primary' | 'secondary' | 'success';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    labelStyle?: StyleProp<TextStyle>;
    disabled?: boolean;
}

const RHFRadioButtonComponent = (
    props: PropsWithChildren<RHFRadioButtonComponentProps>,
) => {
    const {
        name,
        control,
        defaultValue,
        style,
        value,
        onChange,
        label,
        size,
        labelStyle,
        disabled,
    } = props;
    const className = props.class;

    const { field } = useController({
        name,
        control,
        defaultValue: defaultValue,
    });

    return (
        <RadioButtonComponent
            checked={field.value === value}
            style={style}
            value={value}
            onChange={() => {
                field.onChange(value);
                if (onChange) {
                    onChange(value);
                }
            }}
            label={label}
            class={className}
            size={size}
            labelStyle={labelStyle}
            disabled={disabled}
        />
    );
};

export default RHFRadioButtonComponent;
