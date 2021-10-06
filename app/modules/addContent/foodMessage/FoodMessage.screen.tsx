import React from 'react';
import {Text, View} from 'react-native';
import CustomPicker from '../../../components/customPicker/CustomPicker';
import styles from './foodMessage.styles';
import {useTranslation} from 'react-i18next';

const FoodMessageScreen = (): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('foodMessageScreen.foodMessage')}</Text>
      <CustomPicker
        label={'sad'}
        data={[
          {label: 'Нет', value: false},
          {label: 'Да', value: true},
        ]}
      />
    </View>
  );
};

export default FoodMessageScreen;
