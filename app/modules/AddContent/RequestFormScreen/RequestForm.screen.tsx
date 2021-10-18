import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import DatePicker from '../AddContentComponents/DatePicker/DatePicker';
import styles from './requestForm.styles';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import ConfirmButton from '../../../components/ConfirmButton/ConfirmButton';
import LinearGradient from 'react-native-linear-gradient';
import {DATE_PICKER_FIELDS} from '../../../constants';
import CustomPicker from '../../../components/CustomPicker/CustomPicker';

export type RequestFormType = {
  startDate: Date;
  endDate: Date;
  dayOffType: string;
  // countOfDays: string;
  // comments: string;
};

const RequestFormScreen = (): JSX.Element => {
  const {t} = useTranslation();
  const [isCleaned, setIsCleaned] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const {control, handleSubmit, setError, watch, clearErrors, reset} =
    useForm<RequestFormType>();

  const watcher = watch();

  useEffect(() => {
    const formValues = Object.values(watcher);
    const isCompletedForm = formValues.reduce((acc, item) => {
      return !item;
    }, false);
    setDisabledButton(isCompletedForm);
  }, [watcher]);

  const onSubmit = (data: RequestFormType) => {
    console.log(data);
    reset();
    setIsCleaned(true);
  };

  const conditionStyle = disabledButton
    ? [styles.button, styles.button_disabled]
    : [styles.button];

  return (
    <View style={styles.container}>
      <DatePicker
        fieldName={DATE_PICKER_FIELDS.START_DATE}
        control={control}
        label={t(`requestFormScreen.${DATE_PICKER_FIELDS.START_DATE}`)}
        setError={setError}
        clearErrors={clearErrors}
      />
      <DatePicker
        fieldName={DATE_PICKER_FIELDS.END_DATE}
        control={control}
        label={t(`requestFormScreen.${DATE_PICKER_FIELDS.END_DATE}`)}
        setError={setError}
        startDate={watcher.startDate}
        clearErrors={clearErrors}
      />
      <CustomPicker
        fieldFormName={DATE_PICKER_FIELDS.DAY_OFF_TYPE}
        control={control}
        label={t(`requestFormScreen.${DATE_PICKER_FIELDS.COUNT_OF_DAYS}`)}
        data={[]}
        isCleaned={isCleaned}
        setShouldBeRested={setIsCleaned}
      />
      <LinearGradient
        colors={[
          'rgba(255, 255, 255, 0.1)',
          'rgba(255, 255, 255, 0.5)',
          '#FFF',
        ]}
        style={styles.button_wrapper}>
        <ConfirmButton
          disabled={disabledButton}
          onPress={handleSubmit(onSubmit)}
          style={conditionStyle}>
          <Text style={styles.button_text}>
            {t('requestFormScreen.sendRequest')}
          </Text>
        </ConfirmButton>
      </LinearGradient>
    </View>
  );
};

export default RequestFormScreen;
