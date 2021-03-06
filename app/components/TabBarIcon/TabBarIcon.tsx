import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './tabBar.styles';
import {useTranslation} from 'react-i18next';

interface ITabBarIcon {
  isFocused?: boolean;
  icon: JSX.Element;
  label: string;
}

const TabBarIcon = memo(
  ({isFocused, icon, label}: ITabBarIcon): JSX.Element => {
    const {t} = useTranslation();

    const conditionStyle = isFocused
      ? [styles.text, styles.text_focused]
      : [styles.text, styles.text_unfocused];

    return (
      <View style={styles.container}>
        {isFocused && <View style={styles.top_line} />}
        <View style={styles.img_wrapper}>
          <Text>{icon}</Text>
        </View>
        <View style={styles.text_wrapper}>
          <Text style={conditionStyle}>
            {t(`TabsAndButtonsHeaders.${label}`)}
          </Text>
        </View>
      </View>
    );
  },
);

export default TabBarIcon;
