import React, { PropsWithChildren } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useController, Control } from 'react-hook-form';
import SliderComponent from './SliderComponent';

export interface RHFSliderComponentProps {
    name: string;
    control?: Control<any>;
    defaultValue?: any;
    labelText?: string;
    showLabel?: boolean;
    minValue: number;
    maxValue: number;
    showMinMax?: boolean;
    step?: number;
    thumbImage?: any;
    testID?: string;
    minimumTintColor?: string;
    headerStyle?: StyleProp<ViewStyle>;
    contentWrapper?: StyleProp<ViewStyle>;
    thumbStyle?: StyleProp<ViewStyle>;
    trackStyle?: StyleProp<ViewStyle>;
    valueExtractor?: (num: number) => string;
    onChange?: (val: number) => void;
    labelTextStyle?: StyleProp<TextStyle>;
}

const RHFSliderComponent = (
    props: PropsWithChildren<RHFSliderComponentProps>,
) => {
    const {
        name,
        control,
        defaultValue,
        labelText,
        showLabel,
        minValue,
        maxValue,
        showMinMax,
        step,
        thumbImage,
        testID,
        minimumTintColor,
        headerStyle,
        contentWrapper,
        thumbStyle,
        trackStyle,
        valueExtractor,
        onChange,
        labelTextStyle,
    } = props;

    const { field } = useController({
        name,
        control,
        defaultValue: defaultValue,
    });

    return (
        <SliderComponent
            labelText={labelText}
            showLabel={showLabel}
            minValue={minValue}
            maxValue={maxValue}
            showMinMax={showMinMax}
            step={step}
            value={field.value}
            thumbImage={thumbImage}
            testID={testID}
            minimumTintColor={minimumTintColor}
            headerStyle={headerStyle}
            contentWrapper={contentWrapper}
            thumbStyle={thumbStyle}
            trackStyle={trackStyle}
            valueExtractor={valueExtractor}
            onChange={(val) => {
                field.onChange(val);
                if (onChange) {
                    onChange(val);
                }
            }}
            labelTextStyle={labelTextStyle}
        />
    );
};

export default RHFSliderComponent;
