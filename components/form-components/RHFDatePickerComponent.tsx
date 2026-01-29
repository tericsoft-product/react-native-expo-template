import React, { PropsWithChildren } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useController, Control } from 'react-hook-form';
import DatePickerComponent from './DatePickerComponent';

export interface RHFDatePickerComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    minDate?: string;
    maxDate?: string;
    onUpdate?: (date: string) => void;
    labelText?: string;
    testID?: string;
    placeHolder?: string;
    style?: StyleProp<ViewStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    contentWrapper?: StyleProp<TextStyle>;
    showLabel?: boolean;
    isRequired?: boolean;
}

const RHFDatePickerComponent = (
    props: PropsWithChildren<RHFDatePickerComponentProps>,
) => {
    const {
        name,
        control,
        defaultValue,
        minDate,
        maxDate,
        onUpdate,
        labelText,
        testID,
        placeHolder,
        style,
        labelTextStyle,
        contentWrapper,
        showLabel,
        isRequired,
    } = props;

    const { field } = useController({
        name,
        control,
        defaultValue: defaultValue,
    });

    return (
        <DatePickerComponent
            date={field.value}
            minDate={minDate}
            maxDate={maxDate}
            onUpdate={(date) => {
                field.onChange(date);
                if (onUpdate) {
                    onUpdate(date);
                }
            }}
            labelText={labelText}
            testID={testID}
            placeHolder={placeHolder}
            style={style}
            labelTextStyle={labelTextStyle}
            contentWrapper={contentWrapper}
            showLabel={showLabel}
            isRequired={isRequired}
        />
    );
};

export default RHFDatePickerComponent;
