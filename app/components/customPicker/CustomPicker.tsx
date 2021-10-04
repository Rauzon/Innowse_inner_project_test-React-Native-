import React, {memo, useState} from 'react';
import {View, Text} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {DropDownSelectIcon} from '../../Icons';
import styles from './customPicker.styles';

type ValueMultiType = string | number | boolean;

type ItemDataType = {
  label: string;
  value: ValueMultiType;
};

interface ICustomPicker {
  label: string;
  data: ItemDataType[];
}

const CustomPicker = memo(({data, label}: ICustomPicker): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.picker_wrapper}>
        <RNPickerSelect
          style={{
            inputAndroid: styles.input,
            inputIOS: styles.input,
            placeholder: styles.placeholder,
          }}
          placeholder={{label}}
          value={selectedValue}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <View style={styles.icon_wrapper}>
              <DropDownSelectIcon />
            </View>
          )}
          onValueChange={value => setSelectedValue(value)}
          items={data}
        />
      </View>
    </View>
  );
});

export default CustomPicker;
