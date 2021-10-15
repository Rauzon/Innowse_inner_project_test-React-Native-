import React, {memo} from 'react';
import {View} from 'react-native';
import DatePicker from '../AddContentComponents/DatePicker/DatePicker';
import styles from './requestForm.styles';
import {useTranslation} from 'react-i18next';

interface IRequestForm {}

const RequestFormScreen = memo(({}: IRequestForm): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <DatePicker label={t('requestFormScreen.startDate')} />
    </View>
  );
});

export default RequestFormScreen;
