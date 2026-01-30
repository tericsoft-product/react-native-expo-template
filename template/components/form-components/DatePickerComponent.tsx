import React, { useCallback, useEffect, useState } from 'react';
import {
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import LabelComponent from '../LabelComponent';
import { Colors, ImageConfig } from '../../utils';
import Common_service from '../../services/common_service';
import CommonStyles from '../../utils/CommonStyles';

export interface DatePickerComponentProps {
  date?: string;
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

const currentDate = dayjs();

const DatePickerComponent = (props: DatePickerComponentProps) => {
  const {
    date,
    minDate,
    maxDate,
    onUpdate,
    labelText,
    testID,
    placeHolder,
    style,
    labelTextStyle,
    contentWrapper,
  } = props;
  const showLabel =
    props.showLabel !== undefined
      ? props.showLabel
      : !!(labelText && labelText.length > 0);
  const isRequired = props.isRequired !== undefined ? props.isRequired : true;
  const [datepickerShow, setDatepickerShow] = useState(false);
  const [changedDate, setChangedDate] = useState<string | null>(null);

  const [dateConstraints, setDateConstraints] = useState({});

  // maximumDate:{(mode === 'max' ? maxDate.toDate() : pickerMaxDate.toDate())}
  // minimumDate:{(mode === 'max' ? pickerMinDate.toDate() : minDate.toDate())}
  const calcDateConstraints = useCallback(() => {
    const constraints: any = {};

    if (maxDate) {
      constraints.maximumDate = dayjs(maxDate).toDate();
    }
    if (minDate) {
      constraints.minimumDate = dayjs(minDate).toDate();
    }
    setDateConstraints(constraints);
  }, [maxDate, minDate]);
  useEffect(() => {
    calcDateConstraints();
  }, [minDate, maxDate, calcDateConstraints]);

  useEffect(() => {
    setChangedDate(date || '');
    console.log('date changed', date);
  }, [date]);

  const getDatePicker = (
    display:
      | 'default'
      | 'compact'
      | 'inline'
      | 'spinner'
      | 'clock'
      | 'calendar' = 'default',
  ) => {
    return (
      <RNDateTimePicker
        themeVariant="light"
        value={changedDate ? new Date(changedDate) : currentDate.toDate()}
        {...dateConstraints}
        textColor={
          Common_service.isAndroid() ? Colors.textOnPrimary : Colors.textDark
        }
        mode={'date'}
        display={display}
        onChange={(e: any, value: any) => {
          setDatepickerShow(Common_service.isIOS());
          if (value) {
            const curDate = dayjs(value).format('YYYY-MM-DD');
            setChangedDate(curDate);
            if (onUpdate) {
              onUpdate(curDate);
            }
          }
        }}
      />
    );
  };

  const openDatePicker = () => {
    console.log('opening date picker');
    setDatepickerShow(true);
  };

  return (
    <>
      {datepickerShow && (
        <>
          {Common_service.isAndroid() && getDatePicker()}
          {Common_service.isIOS() && (
            <Modal
              animationType="none"
              transparent
              visible={datepickerShow}
              presentationStyle="overFullScreen">
              <View style={styles.dateModalWrapper}>
                <View>
                  <Text style={CommonStyles.placeHolder}>Select Date</Text>
                  {getDatePicker('inline')}
                </View>
              </View>
            </Modal>
          )}
        </>
      )}
      <View testID={testID} style={[CommonStyles.formWrapper, contentWrapper]}>
        {showLabel && (
          <View style={styles.rowWrapper}>
            <LabelComponent
              title={labelText || ''}
              style={[labelTextStyle]}
              textStyle={CommonStyles.formLabelText}
            />
            {isRequired && <Text style={CommonStyles.required}>*</Text>}
          </View>
        )}
        <TouchableOpacity onPress={() => openDatePicker()}>
          <View style={[CommonStyles.inputStyle, styles.date, style]}>
            <View style={{ flex: 1 }}>
              {!!changedDate && (
                <Text style={[CommonStyles.placeholderStyle, styles.dateText]}>
                  {dayjs(changedDate).format('YYYY-MM-DD')}
                </Text>
              )}
              {!changedDate && (
                <Text
                  style={[
                    CommonStyles.placeholderStyle,
                    { color: Colors.placeholder },
                  ]}>
                  {placeHolder || 'Select Date'}
                </Text>
              )}
            </View>
            <ImageConfig.CalendarIcon
              style={{ marginRight: 15 }}
              width={24}
              color={Colors.textLight}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateText: {
    color: Colors.textDark,
  },
  dateModalWrapper: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
});

export default DatePickerComponent;
