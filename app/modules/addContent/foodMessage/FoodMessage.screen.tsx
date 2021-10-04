import React from 'react';
import {Text, View} from 'react-native';
import CustomPicker from '../../../components/customPicker/CustomPicker';
import styles from './foodMessage.styles';

const FoodMessageScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Давай оповестим коллег о появлении еды</Text>
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
