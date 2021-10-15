import React, {memo, ReactNode} from 'react';
import {View, Text, ViewStyle} from 'react-native';
import styles from './requestHeaderItem.styles';

interface IRequestHeaderItem {
  iconComponent: ReactNode;
  daysCount: number;
  text: string;
  style?: ViewStyle | ViewStyle[];
}

const RequestHeaderItem = memo(
  ({
    iconComponent,
    text,
    daysCount,
    style,
  }: IRequestHeaderItem): JSX.Element => {
    const conditionStyle = style ? [styles.container, style] : styles.container;

    return (
      <View style={conditionStyle}>
        <View style={styles.icon_container}>{iconComponent}</View>
        <View style={styles.content_wrapper}>
          <Text style={styles.daysCount}>{daysCount}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    );
  },
);

export default RequestHeaderItem;
