import React, {memo, useEffect} from 'react';
import {Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {DropDownSelectIcon} from '../../Icons';
import styles from './customPicker.styles';
import {Control, useController, UseFormSetError} from 'react-hook-form';
import {FoodMessageFormDataType} from '../../modules/AddContent/FoodMessageScreen/FoodMessage.screen';
import {ERRORS} from '../../constants';
import {useTranslation} from 'react-i18next';

type ValueMultiType = string | number | boolean;

export type ItemDataType = {
  label: string;
  value: ValueMultiType;
};

interface ICustomPicker {
  label: string;
  addedLabel?: string;
  data: ItemDataType[];
  fieldFormName: string;
  control: Control<FoodMessageFormDataType, object>;
  isDisabled?: boolean;
  setError?: UseFormSetError<FoodMessageFormDataType>;
  isCleaned: boolean;
  setShouldBeRested(value: boolean): void;
}

const CustomPicker = memo(
  ({
    data,
    label,
    addedLabel,
    control,
    fieldFormName,
    isDisabled,
    setError,
    isCleaned,
    setShouldBeRested,
  }: ICustomPicker): JSX.Element => {
    const {t} = useTranslation();
    const {
      field: {value, onChange},
      fieldState: {error},
    } = useController({
      name: fieldFormName,
      defaultValue: undefined,
      control,
    });
    useEffect(() => {
      if (setError && !isDisabled) {
        if (setError) {
          setError(fieldFormName, {
            type: 'manual',
            message: undefined,
          });
        }
      }
    }, [isDisabled, setError, fieldFormName]);

    useEffect(() => {
      if (isCleaned) {
        setShouldBeRested(false);
      }
    }, [isCleaned, setShouldBeRested]);

    const icon = () => (
      <View style={styles.icon_wrapper}>
        <DropDownSelectIcon />
      </View>
    );

    const onSelectOpen = (): void => {
      const errObj = {
        type: 'manual',
        message: isDisabled
          ? t(`errorMessages.${ERRORS.SELECT_FIELD_WAS_NOT_CHOSEN}`)
          : undefined,
      };
      if (setError) {
        setError(fieldFormName, errObj);
      }
    };

    const currentLabel = !addedLabel
      ? label
      : `${addedLabel} ${label.toLowerCase()}`;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker_wrapper}>
          <RNPickerSelect
            onOpen={onSelectOpen}
            style={{
              inputAndroid: styles.input,
              inputIOS: styles.input,
              placeholder: styles.placeholder,
            }}
            placeholder={{label: currentLabel}}
            value={isCleaned ? '' : value}
            useNativeAndroidPickerStyle={false}
            Icon={icon}
            onValueChange={onChange}
            items={data}
            disabled={isDisabled}
          />
        </View>
        {error?.message && (
          <Text style={styles.error_message}>{error.message}</Text>
        )}
      </View>
    );
  },
);

export default CustomPicker;
