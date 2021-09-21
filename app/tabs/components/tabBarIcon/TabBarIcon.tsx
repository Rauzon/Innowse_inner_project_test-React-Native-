import React, {memo} from 'react';
import {Image, View, Text} from 'react-native';
import styles from './tabBar.styles';
import {TABS_BAR_URL_DATA} from '../../../constants';

interface ITabBarIconProps {
  isFocused: boolean;
  icon: string;
  label: string;
}

const TabBarIcon = memo(
  ({isFocused, icon, label}: ITabBarIconProps): JSX.Element => {
    return (
      <View style={styles.container}>
        {isFocused && <View style={styles.top_line} />}
        <View style={styles.img_wrapper}>
          <Image
            source={TABS_BAR_URL_DATA[icon]}
            style={[{tintColor: isFocused ? '#C32D2C' : '#828282'}, styles.img]}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={[{color: isFocused ? '#C32D2C' : '#828282'}, styles.text]}>
            {label}
          </Text>
        </View>
      </View>
    );
  },
);

export default TabBarIcon;
