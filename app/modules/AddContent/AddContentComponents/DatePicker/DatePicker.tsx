import React, {memo, useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {CalendarInputIcon} from '../../../../Icons';
import styles from './datePicker.styles';
import {
  Control,
  useController,
  UseFormClearErrors,
  UseFormSetError,
} from 'react-hook-form';
import {RequestFormType} from '../../RequestFormScreen/RequestForm.screen';
import getConvertedDate from '../../../../helpers/getConvertedDate';
import {DATE_PICKER_FIELDS, ERRORS} from '../../../../constants';
import {useTranslation} from 'react-i18next';
import validateErrors from '../../../../helpers/validateErrors';

interface IDatePicker {
  label: string;
  fieldName: string;
  startDate?: Date;
  control: Control<RequestFormType>;
  setError?: UseFormSetError<RequestFormType>;
  clearErrors?: UseFormClearErrors<RequestFormType>;
}

const DatePicker = memo(
  ({
    label,
    fieldName,
    control,
    setError,
    startDate,
    clearErrors,
  }: IDatePicker): JSX.Element => {
    const {t} = useTranslation();
    const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
    const {
      field: {value, onChange},
      fieldState: {error},
    } = useController({
      name: fieldName,
      control,
      defaultValue: undefined,
    });

    const memoizedDateValue = useMemo(() => getConvertedDate(value), [value]);

    const handleCancel = () => {
      setIsVisibleModal(false);
    };

    const handleConfirm = (date: Date) => {
      const conditionErrorMessage =
        fieldName === DATE_PICKER_FIELDS.START_DATE
          ? t(`errorMessages.${ERRORS.DATE_HAS_TO_BE_MORE_THAN_CURRENT}`)
          : fieldName === DATE_PICKER_FIELDS.END_DATE
          ? t(`errorMessages.${ERRORS.HAS_TO_BE_MORE_THAN_START_DATE}`)
          : 'some error';
      validateErrors({
        date,
        handleCancel,
        fieldName,
        setError,
        onChange,
        message: conditionErrorMessage,
        startDate,
        clearErrors,
      });
    };

    const handlePress = () => {
      setIsVisibleModal(true);
    };

    return (
      <View style={styles.container}>
        <View style={styles.label_wrapper}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handlePress}
          style={styles.picker_wrapper}>
          <View>
            <Text style={styles.input}>{memoizedDateValue}</Text>
          </View>
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
        {error?.message && <Text style={styles.error}>{error.message}</Text>}
      </View>
    );
  },
);

export default DatePicker;
