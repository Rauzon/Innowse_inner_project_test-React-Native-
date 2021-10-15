import React, {memo, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {CalendarInputIcon} from '../../../../Icons';
import styles from './datePicker.styles';

interface IDatePicker {
  label: string;
}

const DatePicker = memo(({label}: IDatePicker): JSX.Element => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const handleCancel = () => {
    setIsVisibleModal(false);
  };

  const handleConfirm = () => {};

  const handlePress = () => {};

  return (
    <>
      <View style={styles.label_wrapper}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={handlePress}
        style={styles.picker_wrapper}>
        <View style={styles.icon_wrapper}>
          <CalendarInputIcon />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        mode="date"
        isVisible={isVisibleModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
});

export default DatePicker;
